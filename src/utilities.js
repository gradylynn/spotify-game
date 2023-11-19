import Cookies from 'js-cookie';
import tracks from './tracks.json';

// Max number of days of selections remembered by cookies
const SELECTION_MEMORY = 10;

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
NOW.setHours(NOW.getHours() + 5); // date cutoff will be 5 hrs after UTC midnight
const TODAY = new Date(
    `${NOW.getUTCFullYear()}-${String(NOW.getUTCMonth()).padStart(2, '0')}-${String(NOW.getUTCDate()).padStart(2, '0')}T00:00:00`
);
const YESTERDAY = new Date(TODAY);
YESTERDAY.setDate(YESTERDAY.getDate() - 1);

// NOTE: this block here is just for testing
if (!Cookies.get('selections')) {
    Cookies.set('selections', '012201211');
    Cookies.set('lastSelectionDate', (new Date('2023-11-16T00:00:00')).getTime());
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
        Cookies.set('lastSelectionDate', TODAY.getTime());
        Cookies.set('selections', selectionsString);
    }
    else {
        // create the cookies appropriately if thety don't yet exist
        Cookies.set('lastSelectionDate', TODAY.getTime());
        Cookies.set('selections', selection.toString());
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
    let selectionsString = Cookies.get('selections');
    return tracks.map((d, i) => {
        let d2 = JSON.parse(JSON.stringify(d));
        d2['selection'] = selectionsString[i] || '0';
        d2['dateStr'] = convertDateStr(d['date']);
        return d2;
    });
}

export {submitSelection, getTodaysSelection, getResultsData};
