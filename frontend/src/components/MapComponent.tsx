import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Initialisation de la carte
    const map = L.map('map').setView([46.603354, 1.888334], 6); // Centré sur la France, zoom niveau 6

    // Ajout d'une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Nettoyage lors du démontage du composant
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default MapComponent;