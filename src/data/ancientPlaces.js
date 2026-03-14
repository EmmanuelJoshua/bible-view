export const ANCIENT_PLACES = [
  // ═══════════════════════════════════════════
  // MESOPOTAMIA & EAST
  // ═══════════════════════════════════════════
  { name: 'Garden of Eden', lat: 31.0, lng: 47.0, eras: ['PRE_FLOOD'], type: 'sacred' },
  { name: 'Land of Nod', lat: 31.5, lng: 45.5, eras: ['PRE_FLOOD'], type: 'region' },
  { name: 'Mt. Ararat', lat: 39.7, lng: 44.3, eras: ['PRE_FLOOD'], type: 'landmark' },
  { name: 'Shinar (Babel)', lat: 32.54, lng: 44.42, eras: ['PRE_FLOOD', 'PATRIARCHS'], type: 'city' },
  { name: 'Ur of the Chaldees', lat: 30.96, lng: 46.10, eras: ['PATRIARCHS'], type: 'city' },
  { name: 'Babylon', lat: 32.54, lng: 44.42, eras: ['EXILE', 'DIVIDED_KINGDOM', 'INTERTESTAMENTAL'], type: 'city' },
  { name: 'Nineveh', lat: 36.36, lng: 43.15, eras: ['DIVIDED_KINGDOM', 'EXILE'], type: 'city' },
  { name: 'Susa (Shushan)', lat: 32.19, lng: 48.26, eras: ['EXILE', 'RETURN'], type: 'city' },
  { name: 'Persepolis', lat: 29.93, lng: 52.89, eras: ['RETURN', 'INTERTESTAMENTAL'], type: 'city' },

  // ═══════════════════════════════════════════
  // HARAN & NORTHERN MESOPOTAMIA
  // ═══════════════════════════════════════════
  { name: 'Haran', lat: 36.87, lng: 39.03, eras: ['PATRIARCHS'], type: 'city' },
  { name: 'Paddan-Aram', lat: 36.5, lng: 38.8, eras: ['PATRIARCHS'], type: 'region' },
  { name: 'Carchemish', lat: 36.83, lng: 38.01, eras: ['DIVIDED_KINGDOM', 'EXILE'], type: 'city' },

  // ═══════════════════════════════════════════
  // CANAAN / ISRAEL — MAJOR CITIES
  // ═══════════════════════════════════════════
  { name: 'Jerusalem (Salem)', lat: 31.7683, lng: 35.2137, eras: ['PATRIARCHS', 'MONARCHY', 'DIVIDED_KINGDOM', 'EXILE', 'RETURN', 'INTERTESTAMENTAL', 'ROMAN', 'APOSTOLIC'], type: 'city' },
  { name: 'Bethlehem (Ephrath)', lat: 31.7049, lng: 35.2078, eras: ['PATRIARCHS', 'MONARCHY', 'ROMAN'], type: 'city' },
  { name: 'Hebron (Kiriath-Arba)', lat: 31.5326, lng: 35.0998, eras: ['PATRIARCHS', 'JUDGES', 'MONARCHY'], type: 'city' },
  { name: 'Shechem', lat: 32.2131, lng: 35.2824, eras: ['PATRIARCHS', 'JUDGES', 'DIVIDED_KINGDOM'], type: 'city' },
  { name: 'Bethel', lat: 31.9393, lng: 35.2271, eras: ['PATRIARCHS', 'JUDGES', 'DIVIDED_KINGDOM'], type: 'city' },
  { name: 'Beersheba', lat: 31.2457, lng: 34.7925, eras: ['PATRIARCHS', 'MONARCHY'], type: 'city' },
  { name: 'Jericho', lat: 31.8711, lng: 35.4442, eras: ['JUDGES', 'ROMAN'], type: 'city' },
  { name: 'Samaria', lat: 32.2750, lng: 35.1900, eras: ['DIVIDED_KINGDOM'], type: 'city' },
  { name: 'Dan', lat: 33.2488, lng: 35.6519, eras: ['JUDGES', 'DIVIDED_KINGDOM'], type: 'city' },
  { name: 'Megiddo', lat: 32.5847, lng: 35.1847, eras: ['JUDGES', 'MONARCHY', 'DIVIDED_KINGDOM'], type: 'city' },
  { name: 'Hazor', lat: 33.0172, lng: 35.5681, eras: ['JUDGES', 'MONARCHY'], type: 'city' },
  { name: 'Lachish', lat: 31.5647, lng: 34.8489, eras: ['MONARCHY', 'DIVIDED_KINGDOM', 'EXILE'], type: 'city' },
  { name: 'Gibeah', lat: 31.8200, lng: 35.2300, eras: ['JUDGES', 'MONARCHY'], type: 'city' },
  { name: 'Shiloh', lat: 32.0556, lng: 35.2889, eras: ['JUDGES'], type: 'sacred' },
  { name: 'Ai', lat: 31.9167, lng: 35.2500, eras: ['JUDGES'], type: 'city' },
  { name: 'Gibeon', lat: 31.8500, lng: 35.1833, eras: ['JUDGES', 'MONARCHY'], type: 'city' },

  // ═══════════════════════════════════════════
  // GALILEE & NORTH
  // ═══════════════════════════════════════════
  { name: 'Nazareth', lat: 32.6996, lng: 35.3035, eras: ['ROMAN'], type: 'city' },
  { name: 'Capernaum', lat: 32.8803, lng: 35.5753, eras: ['ROMAN'], type: 'city' },
  { name: 'Sea of Galilee (Kinnereth)', lat: 32.8231, lng: 35.5831, eras: ['ROMAN', 'APOSTOLIC'], type: 'water' },
  { name: 'Tiberias', lat: 32.7922, lng: 35.5331, eras: ['ROMAN'], type: 'city' },
  { name: 'Bethsaida', lat: 32.9078, lng: 35.6306, eras: ['ROMAN'], type: 'city' },
  { name: 'Cana', lat: 32.7500, lng: 35.3400, eras: ['ROMAN'], type: 'city' },
  { name: 'Nain', lat: 32.6300, lng: 35.3500, eras: ['ROMAN'], type: 'city' },
  { name: 'Caesarea Philippi', lat: 33.2478, lng: 35.6939, eras: ['ROMAN'], type: 'city' },
  { name: 'Mt. Tabor', lat: 32.6869, lng: 35.3914, eras: ['JUDGES', 'ROMAN'], type: 'landmark' },
  { name: 'Mt. Carmel', lat: 32.7350, lng: 35.0300, eras: ['DIVIDED_KINGDOM'], type: 'landmark' },

  // ═══════════════════════════════════════════
  // COASTAL & PHILISTIA
  // ═══════════════════════════════════════════
  { name: 'Caesarea Maritima', lat: 32.5000, lng: 34.8900, eras: ['ROMAN', 'APOSTOLIC'], type: 'city' },
  { name: 'Joppa (Jaffa)', lat: 32.0533, lng: 34.7553, eras: ['MONARCHY', 'APOSTOLIC'], type: 'city' },
  { name: 'Gaza', lat: 31.5000, lng: 34.4667, eras: ['JUDGES', 'APOSTOLIC'], type: 'city' },
  { name: 'Ashkelon', lat: 31.6667, lng: 34.5500, eras: ['JUDGES'], type: 'city' },
  { name: 'Ashdod', lat: 31.8000, lng: 34.6500, eras: ['JUDGES'], type: 'city' },
  { name: 'Ekron', lat: 31.7833, lng: 34.8167, eras: ['JUDGES'], type: 'city' },
  { name: 'Gath', lat: 31.6167, lng: 34.8500, eras: ['JUDGES', 'MONARCHY'], type: 'city' },
  { name: 'Tyre', lat: 33.2708, lng: 35.1961, eras: ['MONARCHY', 'DIVIDED_KINGDOM', 'ROMAN'], type: 'city' },
  { name: 'Sidon', lat: 33.5572, lng: 35.3717, eras: ['MONARCHY', 'DIVIDED_KINGDOM', 'ROMAN'], type: 'city' },

  // ═══════════════════════════════════════════
  // JORDAN VALLEY & EAST
  // ═══════════════════════════════════════════
  { name: 'Peniel (Penuel)', lat: 32.1833, lng: 35.5667, eras: ['PATRIARCHS'], type: 'sacred' },
  { name: 'Sodom', lat: 31.1, lng: 35.4, eras: ['PATRIARCHS'], type: 'city' },
  { name: 'Gomorrah', lat: 31.0, lng: 35.45, eras: ['PATRIARCHS'], type: 'city' },
  { name: 'Salt Sea (Dead Sea)', lat: 31.5, lng: 35.5, eras: ['PATRIARCHS', 'MONARCHY', 'ROMAN'], type: 'water' },
  { name: 'Jordan River', lat: 32.0, lng: 35.55, eras: ['JUDGES', 'ROMAN'], type: 'water' },
  { name: 'Gilgal', lat: 31.8500, lng: 35.4200, eras: ['JUDGES'], type: 'sacred' },
  { name: 'Bethabara', lat: 31.8372, lng: 35.5478, eras: ['ROMAN'], type: 'sacred' },

  // ═══════════════════════════════════════════
  // SINAI & EXODUS ROUTE
  // ═══════════════════════════════════════════
  { name: 'Goshen', lat: 30.78, lng: 31.83, eras: ['PATRIARCHS', 'EXODUS'], type: 'region' },
  { name: 'Rameses', lat: 30.79, lng: 31.83, eras: ['EXODUS'], type: 'city' },
  { name: 'Succoth', lat: 30.55, lng: 32.10, eras: ['EXODUS'], type: 'city' },
  { name: 'Red Sea Crossing', lat: 29.95, lng: 32.55, eras: ['EXODUS'], type: 'sacred' },
  { name: 'Mt. Sinai (Horeb)', lat: 28.5393, lng: 33.975, eras: ['EXODUS'], type: 'sacred' },
  { name: 'Kadesh-Barnea', lat: 30.64, lng: 34.39, eras: ['EXODUS', 'JUDGES'], type: 'city' },
  { name: 'Wilderness of Zin', lat: 30.5, lng: 34.7, eras: ['EXODUS'], type: 'region' },
  { name: 'Elim', lat: 29.2, lng: 33.2, eras: ['EXODUS'], type: 'city' },
  { name: 'Marah', lat: 29.4, lng: 33.1, eras: ['EXODUS'], type: 'city' },

  // ═══════════════════════════════════════════
  // EGYPT
  // ═══════════════════════════════════════════
  { name: 'Memphis (Noph)', lat: 29.87, lng: 31.25, eras: ['PATRIARCHS', 'EXODUS', 'EXILE'], type: 'city' },
  { name: 'Thebes (No-Amon)', lat: 25.70, lng: 32.64, eras: ['EXODUS'], type: 'city' },
  { name: 'On (Heliopolis)', lat: 30.13, lng: 31.31, eras: ['PATRIARCHS'], type: 'city' },
  { name: 'Alexandria', lat: 31.20, lng: 29.92, eras: ['INTERTESTAMENTAL', 'APOSTOLIC'], type: 'city' },

  // ═══════════════════════════════════════════
  // ASIA MINOR (PAUL'S JOURNEYS)
  // ═══════════════════════════════════════════
  { name: 'Antioch of Syria', lat: 36.20, lng: 36.16, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Antioch of Pisidia', lat: 38.30, lng: 31.18, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Tarsus', lat: 36.92, lng: 34.89, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Ephesus', lat: 37.9497, lng: 27.3639, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Smyrna', lat: 38.42, lng: 27.14, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Pergamum', lat: 39.12, lng: 27.18, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Thyatira', lat: 38.92, lng: 27.84, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Sardis', lat: 38.49, lng: 28.04, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Philadelphia', lat: 38.35, lng: 28.52, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Laodicea', lat: 37.84, lng: 29.11, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Colossae', lat: 37.79, lng: 29.26, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Derbe', lat: 37.35, lng: 33.35, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Lystra', lat: 37.57, lng: 32.35, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Iconium', lat: 37.87, lng: 32.49, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Troas', lat: 39.76, lng: 26.18, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Patmos', lat: 37.30, lng: 26.55, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Miletus', lat: 37.53, lng: 27.28, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Perga', lat: 36.96, lng: 30.85, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Attalia', lat: 36.88, lng: 30.70, eras: ['APOSTOLIC'], type: 'city' },

  // ═══════════════════════════════════════════
  // GREECE & EUROPE
  // ═══════════════════════════════════════════
  { name: 'Philippi', lat: 41.01, lng: 24.29, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Thessalonica', lat: 40.63, lng: 22.94, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Berea', lat: 40.52, lng: 22.20, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Athens', lat: 37.97, lng: 23.73, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Corinth', lat: 37.91, lng: 22.88, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Crete', lat: 35.24, lng: 24.90, eras: ['APOSTOLIC'], type: 'region' },
  { name: 'Malta (Melita)', lat: 35.90, lng: 14.44, eras: ['APOSTOLIC'], type: 'region' },
  { name: 'Rome', lat: 41.90, lng: 12.50, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Puteoli', lat: 40.82, lng: 14.12, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Cyprus (Salamis)', lat: 35.18, lng: 33.90, eras: ['APOSTOLIC'], type: 'city' },
  { name: 'Paphos', lat: 34.76, lng: 32.42, eras: ['APOSTOLIC'], type: 'city' },

  // ═══════════════════════════════════════════
  // SACRED MOUNTAINS & LANDMARKS
  // ═══════════════════════════════════════════
  { name: 'Mt. Moriah', lat: 31.778, lng: 35.235, eras: ['PATRIARCHS', 'MONARCHY'], type: 'sacred' },
  { name: 'Mt. Zion', lat: 31.772, lng: 35.229, eras: ['MONARCHY', 'ROMAN'], type: 'sacred' },
  { name: 'Mt. of Olives', lat: 31.778, lng: 35.245, eras: ['ROMAN'], type: 'sacred' },
  { name: 'Golgotha', lat: 31.7785, lng: 35.2296, eras: ['ROMAN'], type: 'sacred' },
  { name: 'Garden of Gethsemane', lat: 31.7793, lng: 35.2398, eras: ['ROMAN'], type: 'sacred' },
  { name: 'Mt. Nebo', lat: 31.7672, lng: 35.7256, eras: ['EXODUS'], type: 'landmark' },
  { name: 'Mt. Ebal', lat: 32.2333, lng: 35.2667, eras: ['JUDGES'], type: 'landmark' },
  { name: 'Mt. Gerizim', lat: 32.1994, lng: 35.2728, eras: ['JUDGES'], type: 'landmark' },
  { name: 'Valley of Elah', lat: 31.6833, lng: 34.9500, eras: ['MONARCHY'], type: 'landmark' },
  { name: 'Brook Cherith', lat: 32.0, lng: 35.5, eras: ['DIVIDED_KINGDOM'], type: 'landmark' },

  // ═══════════════════════════════════════════
  // REGIONS
  // ═══════════════════════════════════════════
  { name: 'Land of Canaan', lat: 31.9, lng: 35.0, eras: ['PATRIARCHS', 'EXODUS', 'JUDGES'], type: 'region' },
  { name: 'Philistia', lat: 31.6, lng: 34.6, eras: ['JUDGES', 'MONARCHY'], type: 'region' },
  { name: 'Galilee', lat: 32.75, lng: 35.35, eras: ['ROMAN'], type: 'region' },
  { name: 'Samaria', lat: 32.3, lng: 35.2, eras: ['DIVIDED_KINGDOM', 'ROMAN'], type: 'region' },
  { name: 'Judea', lat: 31.6, lng: 35.1, eras: ['ROMAN', 'APOSTOLIC'], type: 'region' },
  { name: 'Decapolis', lat: 32.6, lng: 35.9, eras: ['ROMAN'], type: 'region' },
  { name: 'Perea', lat: 32.0, lng: 35.7, eras: ['ROMAN'], type: 'region' },
  { name: 'Idumea (Edom)', lat: 30.8, lng: 35.3, eras: ['PATRIARCHS', 'MONARCHY', 'ROMAN'], type: 'region' },
  { name: 'Moab', lat: 31.3, lng: 35.8, eras: ['EXODUS', 'JUDGES', 'MONARCHY'], type: 'region' },
  { name: 'Ammon', lat: 31.9, lng: 36.0, eras: ['JUDGES', 'MONARCHY'], type: 'region' },
  { name: 'Bashan', lat: 32.8, lng: 36.0, eras: ['EXODUS', 'JUDGES'], type: 'region' },
  { name: 'Gilead', lat: 32.3, lng: 35.8, eras: ['JUDGES', 'DIVIDED_KINGDOM'], type: 'region' },
]

export const PLACE_TYPE_STYLES = {
  city:     { color: '#00f3ff', size: 11 },
  sacred:   { color: '#ffb300', size: 11 },
  landmark: { color: '#88bbff', size: 10 },
  water:    { color: '#4488cc', size: 10 },
  region:   { color: '#666688', size: 12 },
}
