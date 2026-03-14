/**
 * Entity path data for Biblical figures across all eras.
 * Each entity has a type for UI grouping, an era tag, a color, and waypoints.
 * Waypoints define lat/lng positions at specific years for 3D globe trails.
 */

export const ENTITY_TYPE_LABELS = {
  person: 'Key Figures',
  patriarch: 'Patriarchs',
  prophet: 'Prophets',
  judge: 'Judges',
  king: 'Kings',
  priest: 'Priests',
  apostle: 'Apostles',
  artifact: 'Artifacts',
  ruler: 'Rulers',
}

export const ENTITY_PATHS = [
  // ═══════════════════════════════════════════
  // PRE-FLOOD ERA (-4000 to -2500)
  // ═══════════════════════════════════════════
  {
    id: 'adam',
    name: 'Adam',
    type: 'person',
    era: 'PRE_FLOOD',
    color: '#ff7777',
    waypoints: [
      { year: -4000, lat: 31.0, lng: 47.0, label: 'Garden of Eden' },
      { year: -3900, lat: 31.5, lng: 45.5, label: 'East of Eden' },
    ]
  },
  {
    id: 'enoch',
    name: 'Enoch',
    type: 'person',
    era: 'PRE_FLOOD',
    color: '#ffcc44',
    waypoints: [
      { year: -3400, lat: 32.0, lng: 45.0, label: 'Walked with God' },
      { year: -3050, lat: 32.5, lng: 44.5, label: 'Taken by God' },
    ]
  },
  {
    id: 'noah',
    name: 'Noah',
    type: 'person',
    era: 'PRE_FLOOD',
    color: '#44aaff',
    waypoints: [
      { year: -2600, lat: 33.0, lng: 44.0, label: 'Building the Ark' },
      { year: -2500, lat: 39.7, lng: 44.3, label: 'The Great Flood' },
      { year: -2450, lat: 39.7, lng: 44.3, label: 'Mount Ararat' },
    ]
  },

  // ═══════════════════════════════════════════
  // PATRIARCHAL ERA (-2200 to -1876)
  // ═══════════════════════════════════════════
  {
    id: 'abraham',
    name: 'Abraham',
    type: 'patriarch',
    era: 'PATRIARCHS',
    color: '#ffb300',
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
    id: 'isaac',
    name: 'Isaac',
    type: 'patriarch',
    era: 'PATRIARCHS',
    color: '#ffd54f',
    waypoints: [
      { year: -2000, lat: 31.7780, lng: 35.2354, label: 'Born – Mount Moriah' },
      { year: -1960, lat: 31.2588, lng: 34.7968, label: 'Beersheba' },
      { year: -1920, lat: 31.3928, lng: 34.4710, label: 'Gerar' },
      { year: -1880, lat: 31.5, lng: 35.1, label: 'Hebron' },
    ]
  },
  {
    id: 'jacob',
    name: 'Jacob / Israel',
    type: 'patriarch',
    era: 'PATRIARCHS',
    color: '#ff9800',
    waypoints: [
      { year: -1950, lat: 31.2588, lng: 34.7968, label: 'Born at Beersheba' },
      { year: -1920, lat: 36.8666, lng: 39.0167, label: 'Fled to Haran' },
      { year: -1900, lat: 32.1833, lng: 35.5667, label: 'Wrestles at Peniel' },
      { year: -1890, lat: 32.2211, lng: 35.2544, label: 'Shechem' },
      { year: -1876, lat: 30.0444, lng: 31.2357, label: 'Moves to Egypt' },
    ]
  },
  {
    id: 'joseph',
    name: 'Joseph',
    type: 'patriarch',
    era: 'PATRIARCHS',
    color: '#e6a800',
    waypoints: [
      { year: -1915, lat: 31.5, lng: 35.1, label: 'Born in Hebron' },
      { year: -1898, lat: 31.72, lng: 35.47, label: 'Sold by brothers' },
      { year: -1895, lat: 30.0444, lng: 31.2357, label: 'Slave in Egypt' },
      { year: -1885, lat: 30.0444, lng: 31.2357, label: 'Pharaoh\'s vizier' },
      { year: -1876, lat: 30.0444, lng: 31.2357, label: 'Reunited with family' },
    ]
  },

  // ═══════════════════════════════════════════
  // EXODUS ERA (-1446)
  // ═══════════════════════════════════════════
  {
    id: 'moses',
    name: 'Moses',
    type: 'prophet',
    era: 'EXODUS',
    color: '#ff3d3d',
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
    id: 'aaron',
    name: 'Aaron',
    type: 'priest',
    era: 'EXODUS',
    color: '#ff6e6e',
    waypoints: [
      { year: -1446, lat: 30.0444, lng: 31.2357, label: 'Speaks for Moses' },
      { year: -1445, lat: 30.6059, lng: 32.3157, label: 'Red Sea crossing' },
      { year: -1444, lat: 28.5393, lng: 33.9750, label: 'High Priest at Sinai' },
      { year: -1407, lat: 30.32, lng: 35.39, label: 'Death at Mount Hor' },
    ]
  },
  {
    id: 'joshua_exodus',
    name: 'Joshua',
    type: 'person',
    era: 'EXODUS',
    color: '#ff8a50',
    waypoints: [
      { year: -1446, lat: 30.0444, lng: 31.2357, label: 'Leaves Egypt' },
      { year: -1444, lat: 28.5393, lng: 33.9750, label: 'Spy sent to Canaan' },
      { year: -1406, lat: 31.7567, lng: 35.5289, label: 'Succeeds Moses' },
    ]
  },
  {
    id: 'ark',
    name: 'Ark of the Covenant',
    type: 'artifact',
    era: 'EXODUS',
    color: '#00ff88',
    waypoints: [
      { year: -1444, lat: 28.5393, lng: 33.9750, label: 'Built at Sinai' },
      { year: -1400, lat: 32.0603, lng: 35.2892, label: 'Shiloh' },
      { year: -1070, lat: 31.7340, lng: 34.7768, label: 'Captured by Philistines' },
      { year: -1060, lat: 31.7340, lng: 34.7768, label: 'Returned to Israel' },
      { year: -1000, lat: 31.7683, lng: 35.2137, label: 'Brought to Jerusalem' },
      { year: -970, lat: 31.7780, lng: 35.2354, label: "Placed in Solomon's Temple" },
    ]
  },

  // ═══════════════════════════════════════════
  // JUDGES ERA (-1406 to -1050)
  // ═══════════════════════════════════════════
  {
    id: 'joshua_conquest',
    name: 'Joshua',
    type: 'judge',
    era: 'JUDGES',
    color: '#ff8a50',
    waypoints: [
      { year: -1406, lat: 31.8711, lng: 35.4442, label: 'Crosses the Jordan' },
      { year: -1400, lat: 31.8711, lng: 35.4442, label: 'Fall of Jericho' },
      { year: -1390, lat: 31.9264, lng: 35.0886, label: 'Battle of Ai' },
      { year: -1380, lat: 32.2211, lng: 35.2544, label: 'Divides the land' },
      { year: -1370, lat: 32.2211, lng: 35.2544, label: 'Farewell at Shechem' },
    ]
  },
  {
    id: 'deborah',
    name: 'Deborah',
    type: 'judge',
    era: 'JUDGES',
    color: '#ffab40',
    waypoints: [
      { year: -1240, lat: 31.93, lng: 35.23, label: 'Judges under the Palm' },
      { year: -1230, lat: 32.68, lng: 35.30, label: 'Battle of Mount Tabor' },
      { year: -1220, lat: 31.93, lng: 35.23, label: '40 years of peace' },
    ]
  },
  {
    id: 'gideon',
    name: 'Gideon',
    type: 'judge',
    era: 'JUDGES',
    color: '#ff9100',
    waypoints: [
      { year: -1190, lat: 32.46, lng: 35.39, label: 'Called at Ophrah' },
      { year: -1185, lat: 32.55, lng: 35.52, label: 'Spring of Harod' },
      { year: -1180, lat: 32.55, lng: 35.52, label: 'Defeats Midianites' },
      { year: -1150, lat: 32.46, lng: 35.39, label: 'Rules in Ophrah' },
    ]
  },
  {
    id: 'samson',
    name: 'Samson',
    type: 'judge',
    era: 'JUDGES',
    color: '#ff6d00',
    waypoints: [
      { year: -1120, lat: 31.77, lng: 34.98, label: 'Born in Zorah' },
      { year: -1110, lat: 31.68, lng: 34.88, label: 'Timnah – lion & riddle' },
      { year: -1100, lat: 31.60, lng: 34.55, label: 'Gaza – carries gates' },
      { year: -1090, lat: 31.67, lng: 34.85, label: 'Captured at Sorek Valley' },
      { year: -1085, lat: 31.60, lng: 34.55, label: 'Death at Gaza temple' },
    ]
  },
  {
    id: 'samuel',
    name: 'Samuel',
    type: 'prophet',
    era: 'JUDGES',
    color: '#ffab00',
    waypoints: [
      { year: -1100, lat: 32.0603, lng: 35.2892, label: 'Called at Shiloh' },
      { year: -1070, lat: 31.9038, lng: 35.2034, label: 'Judges at Ramah' },
      { year: -1050, lat: 31.9038, lng: 35.2034, label: 'Anoints Saul' },
      { year: -1020, lat: 31.7167, lng: 35.0833, label: 'Anoints David' },
    ]
  },

  // ═══════════════════════════════════════════
  // UNITED MONARCHY (-1050 to -930)
  // ═══════════════════════════════════════════
  {
    id: 'saul',
    name: 'King Saul',
    type: 'king',
    era: 'MONARCHY',
    color: '#66bb6a',
    waypoints: [
      { year: -1050, lat: 31.9133, lng: 35.2600, label: 'Anointed at Ramah' },
      { year: -1040, lat: 31.9038, lng: 35.2034, label: 'Gibeah – capital' },
      { year: -1020, lat: 31.42, lng: 35.35, label: 'Pursues David' },
      { year: -1010, lat: 32.52, lng: 35.35, label: 'Death at Mount Gilboa' },
    ]
  },
  {
    id: 'david',
    name: 'King David',
    type: 'king',
    era: 'MONARCHY',
    color: '#00e676',
    waypoints: [
      { year: -1020, lat: 31.7167, lng: 35.0833, label: 'Anointed at Bethlehem' },
      { year: -1015, lat: 31.69, lng: 34.98, label: 'Valley of Elah – Goliath' },
      { year: -1010, lat: 31.44, lng: 35.10, label: 'King at Hebron' },
      { year: -1003, lat: 31.7683, lng: 35.2137, label: 'Conquers Jerusalem' },
      { year: -970, lat: 31.7683, lng: 35.2137, label: 'Death in Jerusalem' },
    ]
  },
  {
    id: 'solomon',
    name: 'King Solomon',
    type: 'king',
    era: 'MONARCHY',
    color: '#00c853',
    waypoints: [
      { year: -970, lat: 31.7683, lng: 35.2137, label: 'Crowned king' },
      { year: -966, lat: 31.7780, lng: 35.2354, label: 'Begins Temple construction' },
      { year: -959, lat: 31.7780, lng: 35.2354, label: 'Temple dedicated' },
      { year: -930, lat: 31.7683, lng: 35.2137, label: 'Death – kingdom divides' },
    ]
  },

  // ═══════════════════════════════════════════
  // DIVIDED KINGDOM (-930 to -586)
  // ═══════════════════════════════════════════
  {
    id: 'rehoboam',
    name: 'Rehoboam',
    type: 'king',
    era: 'DIVIDED_KINGDOM',
    color: '#ff7043',
    waypoints: [
      { year: -930, lat: 32.2211, lng: 35.2544, label: 'Rejected at Shechem' },
      { year: -925, lat: 31.7683, lng: 35.2137, label: 'Rules Judah from Jerusalem' },
      { year: -913, lat: 31.7683, lng: 35.2137, label: 'Death in Jerusalem' },
    ]
  },
  {
    id: 'jeroboam',
    name: 'Jeroboam I',
    type: 'king',
    era: 'DIVIDED_KINGDOM',
    color: '#ff5722',
    waypoints: [
      { year: -930, lat: 32.2211, lng: 35.2544, label: 'Made king of Israel' },
      { year: -925, lat: 32.22, lng: 35.25, label: 'Golden calves at Dan & Bethel' },
      { year: -909, lat: 32.22, lng: 35.25, label: 'Death' },
    ]
  },
  {
    id: 'elijah',
    name: 'Elijah',
    type: 'prophet',
    era: 'DIVIDED_KINGDOM',
    color: '#ff9e80',
    waypoints: [
      { year: -870, lat: 32.37, lng: 35.85, label: 'Tishbe in Gilead' },
      { year: -865, lat: 32.85, lng: 35.03, label: 'Fed by ravens at Cherith' },
      { year: -860, lat: 34.53, lng: 35.84, label: 'Zarephath – widow\'s oil' },
      { year: -855, lat: 32.72, lng: 35.05, label: 'Mount Carmel – fire from heaven' },
      { year: -850, lat: 31.32, lng: 34.92, label: 'Flees to Beersheba' },
      { year: -848, lat: 31.77, lng: 35.53, label: 'Taken up in chariot of fire' },
    ]
  },
  {
    id: 'elisha',
    name: 'Elisha',
    type: 'prophet',
    era: 'DIVIDED_KINGDOM',
    color: '#ffab91',
    waypoints: [
      { year: -848, lat: 31.77, lng: 35.53, label: 'Receives Elijah\'s mantle' },
      { year: -840, lat: 32.22, lng: 35.25, label: 'Heals Naaman' },
      { year: -830, lat: 32.88, lng: 35.50, label: 'Dothan – chariots of fire' },
      { year: -800, lat: 32.22, lng: 35.25, label: 'Death in Samaria' },
    ]
  },
  {
    id: 'isaiah',
    name: 'Isaiah',
    type: 'prophet',
    era: 'DIVIDED_KINGDOM',
    color: '#ff8a65',
    waypoints: [
      { year: -740, lat: 31.7683, lng: 35.2137, label: 'Called in the Temple' },
      { year: -722, lat: 31.7683, lng: 35.2137, label: 'Witnesses fall of Israel' },
      { year: -701, lat: 31.7683, lng: 35.2137, label: 'Advises Hezekiah' },
      { year: -680, lat: 31.7683, lng: 35.2137, label: 'Messianic prophecies' },
    ]
  },

  // ═══════════════════════════════════════════
  // EXILE ERA (-586 to -538)
  // ═══════════════════════════════════════════
  {
    id: 'jeremiah',
    name: 'Jeremiah',
    type: 'prophet',
    era: 'EXILE',
    color: '#ef5350',
    waypoints: [
      { year: -627, lat: 31.82, lng: 35.24, label: 'Called at Anathoth' },
      { year: -605, lat: 31.7683, lng: 35.2137, label: 'Warns Jerusalem' },
      { year: -586, lat: 31.7683, lng: 35.2137, label: 'Witnesses destruction' },
      { year: -580, lat: 30.0444, lng: 31.2357, label: 'Taken to Egypt' },
    ]
  },
  {
    id: 'daniel',
    name: 'Daniel',
    type: 'prophet',
    era: 'EXILE',
    color: '#e53935',
    waypoints: [
      { year: -605, lat: 31.7683, lng: 35.2137, label: 'Deported from Jerusalem' },
      { year: -600, lat: 32.5364, lng: 44.4208, label: 'Serves in Babylon' },
      { year: -555, lat: 32.5364, lng: 44.4208, label: 'Lion\'s den' },
      { year: -538, lat: 32.5364, lng: 44.4208, label: 'Prophecy of 70 weeks' },
    ]
  },
  {
    id: 'ezekiel',
    name: 'Ezekiel',
    type: 'prophet',
    era: 'EXILE',
    color: '#c62828',
    waypoints: [
      { year: -597, lat: 31.7683, lng: 35.2137, label: 'Deported to Babylon' },
      { year: -593, lat: 32.10, lng: 44.80, label: 'Visions by River Chebar' },
      { year: -586, lat: 32.10, lng: 44.80, label: 'Hears of Temple destruction' },
      { year: -570, lat: 32.10, lng: 44.80, label: 'Vision of dry bones' },
    ]
  },

  // ═══════════════════════════════════════════
  // RETURN ERA (-538 to -333)
  // ═══════════════════════════════════════════
  {
    id: 'zerubbabel',
    name: 'Zerubbabel',
    type: 'person',
    era: 'RETURN',
    color: '#64b5f6',
    waypoints: [
      { year: -538, lat: 32.5364, lng: 44.4208, label: 'Leads return from Babylon' },
      { year: -536, lat: 31.7683, lng: 35.2137, label: 'Arrives in Jerusalem' },
      { year: -520, lat: 31.7780, lng: 35.2354, label: 'Rebuilds Temple foundation' },
      { year: -516, lat: 31.7780, lng: 35.2354, label: 'Second Temple completed' },
    ]
  },
  {
    id: 'ezra',
    name: 'Ezra',
    type: 'priest',
    era: 'RETURN',
    color: '#42a5f5',
    waypoints: [
      { year: -458, lat: 32.5364, lng: 44.4208, label: 'Departs Babylon' },
      { year: -457, lat: 31.7683, lng: 35.2137, label: 'Arrives in Jerusalem' },
      { year: -450, lat: 31.7683, lng: 35.2137, label: 'Reads the Law publicly' },
    ]
  },
  {
    id: 'nehemiah',
    name: 'Nehemiah',
    type: 'person',
    era: 'RETURN',
    color: '#90caf9',
    waypoints: [
      { year: -445, lat: 32.43, lng: 48.69, label: 'Cupbearer in Susa' },
      { year: -444, lat: 31.7683, lng: 35.2137, label: 'Arrives in Jerusalem' },
      { year: -443, lat: 31.7683, lng: 35.2137, label: 'Walls rebuilt in 52 days' },
      { year: -430, lat: 31.7683, lng: 35.2137, label: 'Reforms and governance' },
    ]
  },

  // ═══════════════════════════════════════════
  // INTERTESTAMENTAL (-333 to -63)
  // ═══════════════════════════════════════════
  {
    id: 'alexander',
    name: 'Alexander the Great',
    type: 'ruler',
    era: 'INTERTESTAMENTAL',
    color: '#9e9e9e',
    waypoints: [
      { year: -334, lat: 40.52, lng: 22.97, label: 'Departs Macedonia' },
      { year: -333, lat: 36.85, lng: 36.15, label: 'Battle of Issus' },
      { year: -332, lat: 31.20, lng: 29.92, label: 'Conquers Egypt' },
      { year: -331, lat: 36.35, lng: 43.15, label: 'Battle of Gaugamela' },
      { year: -323, lat: 32.5364, lng: 44.4208, label: 'Death in Babylon' },
    ]
  },
  {
    id: 'judas_maccabeus',
    name: 'Judas Maccabeus',
    type: 'person',
    era: 'INTERTESTAMENTAL',
    color: '#bdbdbd',
    waypoints: [
      { year: -167, lat: 31.85, lng: 35.05, label: 'Revolt begins at Modiin' },
      { year: -165, lat: 31.7780, lng: 35.2354, label: 'Recaptures Jerusalem' },
      { year: -164, lat: 31.7780, lng: 35.2354, label: 'Temple rededicated' },
      { year: -160, lat: 31.85, lng: 35.05, label: 'Death in battle' },
    ]
  },

  // ═══════════════════════════════════════════
  // ROMAN PERIOD (-63 to 33 AD)
  // ═══════════════════════════════════════════
  {
    id: 'herod',
    name: 'Herod the Great',
    type: 'ruler',
    era: 'ROMAN',
    color: '#ce93d8',
    waypoints: [
      { year: -37, lat: 31.7683, lng: 35.2137, label: 'Conquers Jerusalem' },
      { year: -20, lat: 31.7780, lng: 35.2354, label: 'Begins Temple renovation' },
      { year: -4, lat: 31.7049, lng: 35.2078, label: 'Massacre of innocents' },
      { year: -4, lat: 31.77, lng: 35.22, label: 'Death in Jericho' },
    ]
  },
  {
    id: 'john_baptist',
    name: 'John the Baptist',
    type: 'prophet',
    era: 'ROMAN',
    color: '#ab47bc',
    waypoints: [
      { year: -5, lat: 31.72, lng: 35.10, label: 'Born in Judean hills' },
      { year: 27, lat: 31.84, lng: 35.54, label: 'Baptizing at the Jordan' },
      { year: 29, lat: 31.84, lng: 35.54, label: 'Baptizes Jesus' },
      { year: 30, lat: 32.28, lng: 35.53, label: 'Imprisoned at Machaerus' },
      { year: 31, lat: 32.28, lng: 35.53, label: 'Beheaded by Herod Antipas' },
    ]
  },
  {
    id: 'jesus',
    name: 'Jesus of Nazareth',
    type: 'person',
    era: 'ROMAN',
    color: '#e040fb',
    waypoints: [
      { year: -4, lat: 31.7049, lng: 35.2078, label: 'Born in Bethlehem' },
      { year: -2, lat: 30.0444, lng: 31.2357, label: 'Flight to Egypt' },
      { year: 4, lat: 32.7022, lng: 35.2979, label: 'Childhood in Nazareth' },
      { year: 27, lat: 31.84, lng: 35.54, label: 'Baptized in the Jordan' },
      { year: 28, lat: 32.7022, lng: 35.2979, label: 'Ministry in Galilee' },
      { year: 30, lat: 32.83, lng: 35.49, label: 'Sermon on the Mount' },
      { year: 32, lat: 31.7683, lng: 35.2137, label: 'Enters Jerusalem' },
      { year: 33, lat: 31.7785, lng: 35.2296, label: 'Crucifixion & Resurrection' },
    ]
  },

  // ═══════════════════════════════════════════
  // APOSTOLIC AGE (33 to 100 AD)
  // ═══════════════════════════════════════════
  {
    id: 'peter',
    name: 'Peter',
    type: 'apostle',
    era: 'APOSTOLIC',
    color: '#00e5ff',
    waypoints: [
      { year: 33, lat: 31.7785, lng: 35.2296, label: 'Pentecost in Jerusalem' },
      { year: 36, lat: 32.93, lng: 35.08, label: 'Cornelius at Caesarea' },
      { year: 44, lat: 31.7785, lng: 35.2296, label: 'Imprisoned & freed' },
      { year: 50, lat: 36.20, lng: 36.15, label: 'Antioch' },
      { year: 64, lat: 41.9028, lng: 12.4964, label: 'Martyred in Rome' },
    ]
  },
  {
    id: 'paul',
    name: 'Paul',
    type: 'apostle',
    era: 'APOSTOLIC',
    color: '#b388ff',
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
  },
  {
    id: 'john_apostle',
    name: 'John',
    type: 'apostle',
    era: 'APOSTOLIC',
    color: '#18ffff',
    waypoints: [
      { year: 33, lat: 31.7785, lng: 35.2296, label: 'Pentecost in Jerusalem' },
      { year: 50, lat: 31.7785, lng: 35.2296, label: 'Pillar of the Church' },
      { year: 70, lat: 37.9497, lng: 27.3639, label: 'Moves to Ephesus' },
      { year: 95, lat: 37.3, lng: 26.55, label: 'Exiled to Patmos' },
      { year: 100, lat: 37.9497, lng: 27.3639, label: 'Death in Ephesus' },
    ]
  },
  {
    id: 'james',
    name: 'James (brother of Jesus)',
    type: 'apostle',
    era: 'APOSTOLIC',
    color: '#84ffff',
    waypoints: [
      { year: 33, lat: 31.7785, lng: 35.2296, label: 'Leader in Jerusalem' },
      { year: 49, lat: 31.7785, lng: 35.2296, label: 'Council of Jerusalem' },
      { year: 62, lat: 31.7785, lng: 35.2296, label: 'Martyred in Jerusalem' },
    ]
  },
  {
    id: 'stephen',
    name: 'Stephen',
    type: 'person',
    era: 'APOSTOLIC',
    color: '#80deea',
    waypoints: [
      { year: 33, lat: 31.7785, lng: 35.2296, label: 'Chosen as deacon' },
      { year: 34, lat: 31.7785, lng: 35.2296, label: 'First Christian martyr' },
    ]
  },
  {
    id: 'barnabas',
    name: 'Barnabas',
    type: 'apostle',
    era: 'APOSTOLIC',
    color: '#4dd0e1',
    waypoints: [
      { year: 36, lat: 31.7785, lng: 35.2296, label: 'Sells field in Jerusalem' },
      { year: 43, lat: 36.20, lng: 36.15, label: 'Antioch with Paul' },
      { year: 46, lat: 37.0, lng: 32.3, label: '1st Journey with Paul' },
      { year: 49, lat: 34.88, lng: 33.63, label: 'Sails to Cyprus' },
    ]
  },
]
