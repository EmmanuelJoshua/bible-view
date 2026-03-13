/**
 * Entity path data for Biblical figures.
 * Each entity has a color and a series of waypoints with coordinates and years.
 */

export const ENTITY_PATHS = [
  {
    id: 'abraham',
    name: 'Abraham',
    color: '#ffb300', // Amber
    waypoints: [
      { year: -2100, lat: 30.9626, lng: 46.1009, label: 'Ur of the Chaldees' },
      { year: -2050, lat: 36.8666, lng: 39.0167, label: 'Haran' },
      { year: -2000, lat: 32.2211, lng: 35.2544, label: 'Shechem, Canaan' },
      { year: -1980, lat: 31.5, lng: 35.1, label: 'Hebron' },
      { year: -1950, lat: 30.0444, lng: 31.2357, label: 'Egypt (famine)' },
      { year: -1930, lat: 31.5, lng: 35.1, label: 'Return to Hebron' },
      { year: -1900, lat: 31.2588, lng: 34.7968, label: 'Beersheba' },
    ]
  },
  {
    id: 'moses',
    name: 'Moses & the Exodus',
    color: '#ff3d3d', // Red
    waypoints: [
      { year: -1526, lat: 30.0444, lng: 31.2357, label: 'Born in Egypt' },
      { year: -1486, lat: 28.7270, lng: 34.2500, label: 'Fled to Midian' },
      { year: -1446, lat: 30.0444, lng: 31.2357, label: 'Returns to Egypt' },
      { year: -1445, lat: 30.6059, lng: 32.3157, label: 'Crossing the Red Sea' },
      { year: -1444, lat: 28.5393, lng: 33.9750, label: 'Mount Sinai' },
      { year: -1406, lat: 31.7567, lng: 35.5289, label: 'Plains of Moab' },
    ]
  },
  {
    id: 'ark',
    name: 'Ark of the Covenant',
    color: '#00ff88', // Green
    waypoints: [
      { year: -1444, lat: 28.5393, lng: 33.9750, label: 'Built at Sinai' },
      { year: -1400, lat: 32.0603, lng: 35.2892, label: 'Shiloh' },
      { year: -1070, lat: 31.7340, lng: 34.7768, label: 'Captured by Philistines' },
      { year: -1060, lat: 31.7340, lng: 34.7768, label: 'Returned to Israel' },
      { year: -1000, lat: 31.7683, lng: 35.2137, label: 'Brought to Jerusalem' },
      { year: -970, lat: 31.7780, lng: 35.2354, label: "Placed in Solomon's Temple" },
    ]
  },
  {
    id: 'paul',
    name: 'Paul the Apostle',
    color: '#b388ff', // Purple
    waypoints: [
      { year: 33, lat: 31.7785, lng: 35.2296, label: 'Conversion near Damascus' },
      { year: 35, lat: 33.5138, lng: 36.2765, label: 'Damascus' },
      { year: 37, lat: 31.7785, lng: 35.2296, label: 'Jerusalem' },
      { year: 46, lat: 36.85, lng: 30.72, label: 'Antioch (1st Journey)' },
      { year: 47, lat: 37.0, lng: 32.3, label: 'Iconium' },
      { year: 49, lat: 36.85, lng: 30.72, label: 'Return to Antioch' },
      { year: 50, lat: 40.6401, lng: 22.9444, label: 'Thessalonica (2nd Journey)' },
      { year: 51, lat: 37.9715, lng: 23.7257, label: 'Athens' },
      { year: 52, lat: 37.9087, lng: 22.8818, label: 'Corinth' },
      { year: 55, lat: 37.9497, lng: 27.3639, label: 'Ephesus (3rd Journey)' },
      { year: 58, lat: 31.7785, lng: 35.2296, label: 'Arrested in Jerusalem' },
      { year: 60, lat: 41.9028, lng: 12.4964, label: 'Voyage to Rome' },
    ]
  }
]
