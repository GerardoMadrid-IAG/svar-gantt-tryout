

export const basic_tasks = [
  {
    id: 1,
    open: true,
    start: new Date(2023, 11, 6),
    duration: 8,
    text: "React Gantt Widget",
    progress: 60,
    type: "summary"
  },
  {
    id: 2,
    parent: 1,
    start: new Date(2023, 11, 6),
    duration: 4,
    text: "Lib-Gantt",
    progress: 80
  },
  {
    id: 3,
    parent: 1,
    start: new Date(2023, 11, 11),
    duration: 4,
    text: "UI Layer",
    progress: 30
  },
  {
    id: 200,
    parent: 1,
    start: new Date(2023, 11, 11),
    duration: 4,
    text: "WTF.......",
    progress: 30
  },
  {
    id: 4,
    start: new Date(2023, 11, 12),
    duration: 8,
    text: "Documentation",
    progress: 10,
    type: "summary",
    open:true
  },
  {
    id: 5,
    parent: 4,
    start: new Date(2023, 11, 10),
    duration: 1,
    text: "Overview",
    progress: 30
  },
  {
    id: 6,
    parent: 4,
    start: new Date(2023, 12, 11),
    duration: 8,
    text: "API reference",
    progress: 2
  },
  {
    id: 7,
    parent: 4,
    start: new Date(2023, 11, 11),
    duration: 8,
    text: "Random Task...",
    progress: 5
  },
  {
    id: 30,
    type: "summary",
    start: new Date(2023, 11, 6),
    duration: 8,
    text: "Reparaciones Basicas",
    progress: 5,
    open:true
  },{
    id: 32,
    parent: 30,
    start: new Date(2023, 11, 6),
    duration: 8,
    text: "Pintura y Enchapado",
    progress: 4
  },{
    id: 33,
    parent: 30,
    start: new Date(2023, 11, 6),
    duration: 8,
    text: "Tapiceria",
    progress: 8
  },{
    id: 34,
    parent: 30,
    start: new Date(2023, 11, 6),
    duration: 8,
    text: "Limpieza de Asientos",
    progress: 80
  }
];

export const original_tasks=[
    {
        "id": 1,
        "text": "React Gantt Widget",
        "open": true,
        "start": "2023-12-05T23:00:00.000Z",
        "duration": 8,
        "progress": 60,
        "type": "summary",
        "parent": null
    },
    {
        "id": 2,
        "text": "Lib-Gantt",
        "open": null,
        "start": "2023-12-05T23:00:00.000Z",
        "duration": 4,
        "progress": 80,
        "type": null,
        "parent": 1
    },
    {
        "id": 3,
        "text": "UI Layer",
        "open": null,
        "start": "2023-12-10T23:00:00.000Z",
        "duration": 4,
        "progress": 30,
        "type": null,
        "parent": 1
    },
    {
        "id": 200,
        "text": "WTF.......",
        "open": null,
        "start": "2023-12-10T23:00:00.000Z",
        "duration": 4,
        "progress": 30,
        "type": null,
        "parent": 1
    },
    {
        "id": 4,
        "text": "Documentation",
        "open": true,
        "start": "2023-12-11T23:00:00.000Z",
        "duration": 8,
        "progress": 10,
        "type": "summary",
        "parent": null
    },
    {
        "id": 5,
        "text": "Overview",
        "open": null,
        "start": "2023-12-09T23:00:00.000Z",
        "duration": 1,
        "progress": 30,
        "type": null,
        "parent": 4
    },
    {
        "id": 6,
        "text": "API reference",
        "open": null,
        "start": "2024-01-10T23:00:00.000Z",
        "duration": 8,
        "progress": 2,
        "type": null,
        "parent": 4
    },
    {
        "id": 7,
        "text": "Random Task...",
        "open": null,
        "start": "2023-12-10T23:00:00.000Z",
        "duration": 8,
        "progress": 5,
        "type": null,
        "parent": 4
    },
    {
        "id": 30,
        "text": "Reparaciones Basicas",
        "open": true,
        "start": "2023-12-05T23:00:00.000Z",
        "duration": 8,
        "progress": 5,
        "type": "summary",
        "parent": null
    },
    {
        "id": 32,
        "text": "Pintura y Enchapado",
        "open": null,
        "start": "2023-12-05T23:00:00.000Z",
        "duration": 8,
        "progress": 4,
        "type": null,
        "parent": 30
    },
    {
        "id": 33,
        "text": "Tapiceria",
        "open": null,
        "start": "2023-12-05T23:00:00.000Z",
        "duration": 8,
        "progress": 8,
        "type": null,
        "parent": 30
    },
    {
        "id": 34,
        "text": "Limpieza de Asientos",
        "open": null,
        "start": "2023-12-05T23:00:00.000Z",
        "duration": 8,
        "progress": 80,
        "type": null,
        "parent": 30
    }
]
export const links = [{ id: 1, source: 20, target: 21, type: "e2e" }];

export   const scales = [
    { unit: "month", step: 1, format: "MMMM yyy" },
    { unit: "day", step: 1, format: "d" },
  ];