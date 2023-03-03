import { createSlice } from '@reduxjs/toolkit';

export const testTicketObj = createSlice({
  name: 'testTicketObj',
  initialState: {
    tickets: [
      {
        price: 92650,
        carrier: 'BT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-05-24T17:55:58.877Z',
            duration: 1086,
            stops: ['DEL', 'HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-02-27T08:37:08.952Z',
            duration: 727,
            stops: [],
          },
        ],
      },
      {
        price: 46060,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-03-31T21:28:56.317Z',
            duration: 1333,
            stops: ['IST', 'DEL', 'JNB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-11-14T08:30:05.082Z',
            duration: 1423,
            stops: ['IST', 'JNB', 'JNB'],
          },
        ],
      },
      {
        price: 52760,
        carrier: 'BT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-01-16T05:44:21.073Z',
            duration: 1322,
            stops: ['JNB', 'IST', 'HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-06-16T02:45:10.483Z',
            duration: 671,
            stops: [],
          },
        ],
      },
      {
        price: 19080,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-05T23:49:26.120Z',
            duration: 755,
            stops: ['JNB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-12-03T09:07:03.322Z',
            duration: 992,
            stops: ['HKG'],
          },
        ],
      },
      {
        price: 39890,
        carrier: 'DP',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-06-18T07:20:08.428Z',
            duration: 1065,
            stops: ['DOH', 'DXB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-03-13T21:20:43.271Z',
            duration: 1098,
            stops: ['IST', 'DXB'],
          },
        ],
      },
      {
        price: 25270,
        carrier: 'AK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-08-16T14:28:18.851Z',
            duration: 1072,
            stops: ['DXB', 'DOH'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-10-23T05:32:34.084Z',
            duration: 980,
            stops: ['HKG'],
          },
        ],
      },
      {
        price: 62830,
        carrier: 'DP',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-04-19T20:03:06.270Z',
            duration: 712,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-12-25T10:23:17.292Z',
            duration: 1256,
            stops: ['DOH', 'IST'],
          },
        ],
      },
      {
        price: 108520,
        carrier: 'BT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-11-15T04:41:38.443Z',
            duration: 624,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-04-12T04:13:27.497Z',
            duration: 1145,
            stops: ['DEL', 'HKG', 'HKG'],
          },
        ],
      },
      {
        price: 49300,
        carrier: 'AK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-06-24T02:11:20.471Z',
            duration: 905,
            stops: ['DXB', 'JNB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-04-18T10:15:27.542Z',
            duration: 1003,
            stops: ['DOH', 'IST'],
          },
        ],
      },
      {
        price: 106320,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-04-11T03:47:10.232Z',
            duration: 1031,
            stops: ['HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-10-27T01:58:23.703Z',
            duration: 1340,
            stops: ['JNB', 'HKG', 'DOH'],
          },
        ],
      },
      {
        price: 31580,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-03-24T15:27:22.774Z',
            duration: 970,
            stops: ['JNB', 'HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-03-30T14:31:04.405Z',
            duration: 1032,
            stops: ['HKG', 'DOH'],
          },
        ],
      },
      {
        price: 52430,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-08-24T03:48:11.167Z',
            duration: 769,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-06-05T04:42:26.053Z',
            duration: 627,
            stops: [],
          },
        ],
      },
      {
        price: 84160,
        carrier: 'AK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-06-14T09:26:02.142Z',
            duration: 959,
            stops: ['JNB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-06-10T23:12:26.119Z',
            duration: 983,
            stops: ['DEL', 'HKG'],
          },
        ],
      },
      {
        price: 55740,
        carrier: 'DP',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-10-16T20:00:10.740Z',
            duration: 1125,
            stops: ['DOH', 'DXB', 'DEL'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-26T13:48:09.031Z',
            duration: 542,
            stops: [],
          },
        ],
      },
      {
        price: 98350,
        carrier: 'BT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-11-13T12:16:09.382Z',
            duration: 973,
            stops: ['DXB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-11-16T05:54:16.780Z',
            duration: 1131,
            stops: ['DEL', 'IST'],
          },
        ],
      },
      {
        price: 77120,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-07-15T18:34:00.629Z',
            duration: 1382,
            stops: ['DOH', 'DEL', 'IST'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-03-10T07:35:28.534Z',
            duration: 1003,
            stops: ['DEL', 'DOH'],
          },
        ],
      },
      {
        price: 93830,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-10-22T19:49:27.295Z',
            duration: 1421,
            stops: ['DEL', 'DOH', 'IST'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-11-06T15:47:20.507Z',
            duration: 779,
            stops: ['HKG'],
          },
        ],
      },
      {
        price: 14670,
        carrier: 'DP',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-10-08T05:42:50.651Z',
            duration: 847,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-09-26T11:01:39.308Z',
            duration: 1148,
            stops: ['IST', 'IST'],
          },
        ],
      },
      {
        price: 41440,
        carrier: 'AK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-11-29T15:08:31.690Z',
            duration: 945,
            stops: ['JNB', 'IST'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-07-07T06:54:12.168Z',
            duration: 1317,
            stops: ['HKG', 'IST', 'DOH'],
          },
        ],
      },
      {
        price: 75990,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-08-30T17:26:58.677Z',
            duration: 630,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-12-27T12:34:37.323Z',
            duration: 1068,
            stops: ['JNB'],
          },
        ],
      },
      {
        price: 67660,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-01-22T21:59:53.756Z',
            duration: 1064,
            stops: ['DEL', 'DOH'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-09-27T09:45:30.656Z',
            duration: 1005,
            stops: ['DOH'],
          },
        ],
      },
      {
        price: 83510,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-02-01T09:15:43.983Z',
            duration: 1287,
            stops: ['DXB', 'DXB', 'DXB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-06-18T20:25:32.018Z',
            duration: 1005,
            stops: ['IST'],
          },
        ],
      },
    ],
    stop: false,
  },
});

export default testTicketObj.reducer;
