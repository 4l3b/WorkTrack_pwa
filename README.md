# WorkTrack

This is the mobile PWA version of [**WorkTrack**](https://github.com/4l3b/WorkTrack), a browser-based tool for recording daily work sessions.

<img src="worktrack_pwa.png" alt="WorkTrack PWA interface" width="30%">

---

## Features

- Log clock-in time, expected work duration, and expected break duration
- Calculates:
  - Expected clock-out time
  - Remaining time in the workday
- Adjusts calculations if:
  - Actual break duration differs from the planned break
  - A session ends early
  - Work continues into overtime
- Stores session data locally, so it persists across page reloads
- JSON export/import:
  - Download a log of your work history
  - Upload a previous log
  - Clear stored data
- Cockpit-style UI modeled after the Flight Management Computer of the iconic McDonnell Douglas MD-11 aircraft

Example JSON log output (DD-MM-YYYY, 24h):
```json
{
  "16-01-2025": [
    {
      "clockIn": "08:04:23",
      "clockOut": "16:33:43",
      "workTime": "08:00:01",
      "breakStart": "13:17:55",
      "breakEnd": "13:47:14",
      "breakTime": "00:29:19"
    }
  ]
}
```

---

## Tech Stack

- **HTML**: Structure
- **CSS**: Styling
- **JavaScript**: Time calculations, data storage, and JSON export/import

---

## Usage

Go to the [GitHub Pages site](https://4l3b.github.io/WorkTrack_pwa/) on your mobile device and save the page to your home screen for quick access and offline use. Instructions for usage are available within the interface by clicking on the app's title.

---

WorkTrack © 2025 by Alessandro Bigolin - [CC BY-NC-SA 4.0].

See LICENSE file: [https://github.com/4l3b/WorkTrack_pwa/blob/main/LICENSE].
