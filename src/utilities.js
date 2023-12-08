import Cookies from 'js-cookie';

var tracks = require('./tracks.json');
tracks.sort((a,b) => (a['date'] < b['date']) ? 1 : ((a['date'] > b['date']) ? -1 : 0))

// Max number of days of selections remembered by cookies
const SELECTION_MEMORY = 32;

// num milliseconds in a day
const MS_IN_DAY = 24 * 60 * 60 * 1000;

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const NOW = new Date();
const TODAY = new Date(
    `${NOW.getUTCFullYear()}-${String(NOW.getUTCMonth()+1).padStart(2, '0')}-${String(NOW.getUTCDate()).padStart(2, '0')}T00:00:00`
);
// date cutoff will be 5 hrs after UTC midnight
if (NOW.getUTCHours() <= 5) {
    TODAY.setDate(TODAY.getDate() - 1);
}
const YESTERDAY = new Date(TODAY);
YESTERDAY.setDate(YESTERDAY.getDate() - 1);

const getTodaysTracks = () => {
    for (const t of tracks) {
        var d = new Date(t['date'] + 'T00:00:00');
        if (TODAY.getTime() === d.getTime()) {
            return [t['track1Id'], t['track2Id']];
        }
    }
}

// return today's selection using cookie data
const getTodaysSelection = () => {
    if (Cookies.get('lastSelectionDate') === TODAY.getTime().toString()) {
        return Cookies.get('selections')[0];
    }
}

// update cookies with selection
const submitSelection = (selection) => {
    if (Cookies.get('lastSelectionDate') && Cookies.get('selections')) {
        // read previous selection date from cookie
        let previousSelectionDate = new Date();
        previousSelectionDate.setTime(Cookies.get('lastSelectionDate'));

        // build the updated selection string
        const daysDiff = Math.round(Math.abs((TODAY - previousSelectionDate) / MS_IN_DAY));
        let selectionsString = selection.toString() +
            '0'.repeat(Math.min(daysDiff, SELECTION_MEMORY) - 1) +
            Cookies.get('selections');
        selectionsString = selectionsString.substring(0, SELECTION_MEMORY);

        // update the cookies appropriately
        Cookies.set('lastSelectionDate', TODAY.getTime(), { expires: SELECTION_MEMORY });
        Cookies.set('selections', selectionsString, { expires: SELECTION_MEMORY });
    }
    else {
        // create the cookies appropriately if they don't yet exist
        Cookies.set('lastSelectionDate', TODAY.getTime(), { expires: SELECTION_MEMORY });
        Cookies.set('selections', selection.toString(), { expires: SELECTION_MEMORY });
    }
}

// converts the 'YYYY-MM-DD' string in the data to what we'll visualize
const convertDateStr = (dateStr) => {
    let d = new Date(dateStr + 'T00:00:00');

    if (
        TODAY.getDate()===d.getDate() &&
        TODAY.getMonth()===d.getMonth() &&
        TODAY.getFullYear()===d.getFullYear()
    ) {
        return 'Today';
    }
    else if (
        YESTERDAY.getDate()===d.getDate() &&
        YESTERDAY.getMonth()===d.getMonth() &&
        YESTERDAY.getFullYear()===d.getFullYear()
    ) {
        return 'Yesterday';
    }
    else {
        return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
    }
}

// get data about tracks & selections
const getResultsData = () => {
    let output = [];
    let selectionsString = Cookies.get('selections');
    // use this variable to adjust for if tommorrow's track is already in the data
    let addOne = TODAY.getTime() < (new Date(tracks[0]['date'] + 'T00:00:00')).getTime() ? 1 : 0;
    for (let i = 0; i < Math.min(tracks.length-addOne, 7); i++) {
        let t = JSON.parse(JSON.stringify(tracks[i+addOne]));
        t['selection'] = selectionsString[i] || '0';
        t['dateStr'] = convertDateStr(tracks[i+addOne]['date']);
        output.push(t);
    }
    return output;
}

export {submitSelection, getTodaysTracks, getTodaysSelection, getResultsData};
