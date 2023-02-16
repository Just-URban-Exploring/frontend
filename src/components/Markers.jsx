import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useState, useRef } from "react";
import "../css/Map.css";
import L from "leaflet";


export const markers = [
  {
    name: "Brandenburger Tor",
    location: { latitude: 52.516275, longitude: 13.377704 },
    info: "Berlin verdankt das Brandenburger Tor König Friedrich Wilhelm II.",
    extendedInfo: "Berlin verdankt das Brandenburger Tor König Friedrich Wilhelm II., der hatte das große Sandsteintor in Auftrag gegeben um einen würdevollen Abschluss des Pracht- Boulevards Unter den Linden zu haben. Es entstand in den Jahren 1788 bis 1791 nach Entwürfen von Carl Gotthard Langhans d.Ä., der sich stark an den Propyläen der Athener Akropolis orientierte. Zwei Jahre nach Fertigstellung des Brandenburger Tors wurde die Quadriga, ein Wagen der von vier Pferden gezogen wird, auf das Dach des Tores gesetzt.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/j59w/Berlin%20verdankt%20das%20Brandenburger%20Tor%20K%C3%B6%20(1).mp3"
  },
  {
    name: "Quadriga auf dem Brandenburger Tor",
    location: { latitude: 52.51629872917535, longitude: 13.37805398629472 },
    info: "Symbol der Einheit",
    extendedInfo: "Die Quadriga auf dem Brandenburger Tor ist eines der bekanntesten Wahrzeichen Berlins und Deutschlands. Die viergespannte Pferdekutsche mit der Siegesgöttin ist ein Symbol für den Sieg und die Einheit des Landes.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Reichstag",
    location: { latitude: 52.519171, longitude: 13.377722 },
    info: "Sitz des Deutschen Bundestages",
    extendedInfo: "Der Reichstag ist ein historisches Gebäude in Berlin und seit 1999 Sitz des Deutschen Bundestages. Es war früher das Parlamentsgebäude des Deutschen Kaiserreichs und des Deutschen Reiches und ist heute ein wichtiger Touristenort.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },   
  {
    name: "Tiegarten",
    location: {latitude: 52.513083, longitude: 13.358056},
    info: "Großer Stadtpark",
    extendedInfo: "Der Tiergarten ist eine große Parkanlage im Zentrum Berlins. Der Park ist bei den Berlinern sehr beliebt und bietet eine Oase der Ruhe und Entspannung im Herzen der Stadt. Der Park ist besonders schön im Frühling und Sommer, wenn die Bäume und Blumen blühen.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/j59w/Berlin%20verdankt%20das%20Brandenburger%20Tor%20K%C3%B6%20(1).mp3"
  },
  {
    name: "Schloss Bellevue",
    location: {latitude: 52.519384, longitude: 13.357190},
    info: "Schloss des Bundespräsidenten",
    extendedInfo: "Schloss Bellevue ist ein Schloss im Zentrum Berlins. Es wurde im Auftrag von König Friedrich Wilhelm III. erbaut und diente später als Gästehaus der Bundesregierung. Heute ist es der Amtssitz des Bundespräsidenten und kann nicht besichtigt werden. Es ist jedoch möglich, den Schlosspark zu besuchen.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/j59w/Berlin%20verdankt%20das%20Brandenburger%20Tor%20K%C3%B6%20(1).mp3"
  },
  {
    name: "Siegessäule",
    location: {latitude: 52.506916, longitude: 13.353682},
    info: "Monument für den Sieg im Deutsch-Dänischen Krieg",
    extendedInfo: "Die Siegessäule ist ein Wahrzeichen von Berlin und ein Monument für den Sieg im Deutsch-Dänischen Krieg von 1864. Sie wurde von Heinrich Strack entworfen und zwischen 1864 und 1873 erbaut. Die Siegessäule steht auf einer 67 Meter hohen Säule und ist von einer goldenen Viktoria-Krone gekrönt. Die Aussichtsplattform auf der Siegessäule bietet einen spektakulären Blick auf die Stadt.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/j59w/Berlin%20verdankt%20das%20Brandenburger%20Tor%20K%C3%B6%20(1).mp3"
  },
  {
    name: "Museumsinsel",
    location: { latitude: 52.518780, longitude: 13.404510 },
    info: "Weltberühmte Museen",
    extendedInfo: "Die Museumsinsel in Berlin ist ein einzigartiger Ort, der fünf weltberühmte Museen beherbergt. Die Gebäude und ihre Sammlungen sind von unschätzbarem Wert und ziehen jedes Jahr Millionen von Besuchern an.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/3tCz/Berlin%20Museumsinsel.mp3"
  },
  {
    name: "Bode-Museum",
    location: { latitude: 52.518611, longitude: 13.405556 },
    info: "Museum der Skulpturen und Byzantinischen Kunst",
    extendedInfo: "Das Bode-Museum beherbergt eine beeindruckende Sammlung von Skulpturen und Kunstwerken aus der byzantinischen Epoche. Es ist eines der fünf Museen auf der Museumsinsel und ein absolutes Muss für Kunstliebhaber.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/6kMx/Bode-Museum%20Berlin.mp3"
  },
  {
    name: "Alte Nationalgalerie",
    location: { latitude: 52.518445, longitude: 13.406083 },
    info: "Kunstwerke des 19. Jahrhunderts",
    extendedInfo: "Die Alte Nationalgalerie auf der Museumsinsel ist ein weiteres Highlight für Kunstliebhaber. Hier sind hauptsächlich Kunstwerke des 19. Jahrhunderts zu finden, darunter Werke von Caspar David Friedrich, Adolph Menzel und vielen anderen.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/8V7l/Alte%20Nationalgalerie%20Berlin.mp3"
  },
  {
    name: "Neues Museum",
    location: { latitude: 52.518416, longitude: 13.406389 },
    info: "Das Neue Museum beherbergt die Ägyptische Sammlung und die Antikensammlung.",
    extendedInfo: "Das Neue Museum ist eines der fünf Museen auf der Museumsinsel in Berlin und beherbergt die Ägyptische Sammlung und die Antikensammlung. Das Gebäude wurde 1855–59 von Friedrich August Stüler erbaut, im Zweiten Weltkrieg schwer beschädigt und von 2003 bis 2009 von David Chipperfield Architects restauriert und wiederaufgebaut.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/c28y/Das%20Neue%20Museum%20beherbergt%20die%20%C3%84gypti.mp3"
  },
  {
    name: "Pergamonmuseum",
    location: { latitude: 52.518445, longitude: 13.406389 },
    info: "Das Pergamonmuseum beherbergt einige der bekanntesten archäologischen Schätze der Welt.",
    extendedInfo: "Das Pergamonmuseum ist eines der fünf Museen auf der Museumsinsel in Berlin und beherbergt einige der bekanntesten archäologischen Schätze der Welt, darunter das berühmte Pergamon-Altar und das Ischtar-Tor. Das Museum wurde zwischen 1910 und 1930 von Alfred Messel und Ludwig Hoffmann erbaut.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/l07s/Das%20Pergamonmuseum%20beherbergt%20einige%20.mp3"
  },
  {
    name: "Altes Museum",
    location: { latitude: 52.518416, longitude: 13.406389 },
    info: "Das Alte Museum ist das älteste Museum auf der Museumsinsel in Berlin.",
    extendedInfo: "Das Alte Museum ist das älteste Museum auf der Museumsinsel in Berlin und beherbergt die Antikensammlung. Das Gebäude wurde zwischen 1823 und 1830 von Karl Friedrich Schinkel im Stil des Klassizismus erbaut und war das erste öffentlich zugängliche Museum in Preußen.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: "https://dl.sndup.net/kh9n/Das%20Alte%20Museum%20ist%20das%20%C3%A4lteste.mp3"
  },
  {
    name: "Lustgarten",
    location: { latitude: 52.519336, longitude: 13.396955 },
    info: "Zentraler Platz der Museumsinsel",
    extendedInfo: "Der Lustgarten ist ein zentraler Platz auf der Museumsinsel, einem Teil des Berliner Stadtzentrums. Er befindet sich zwischen dem Alten Museum im Norden und dem Berliner Dom im Süden. Der Lustgarten ist ein beliebter Ort für Touristen, um die Sehenswürdigkeiten auf der Museumsinsel zu besuchen oder einfach nur zu entspannen.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: ""
  },
  {
    name: "Berliner Dom",
    location: { latitude: 52.519386, longitude: 13.403094 },
    info: "Größte Kirche Berlins",
    extendedInfo: "Der Berliner Dom ist die größte Kirche Berlins und ein bedeutendes Wahrzeichen der Stadt. Das neobarocke Gebäude wurde Anfang des 20. Jahrhunderts erbaut und dient heute als evangelische Kirche und Museum. Der Dom befindet sich auf der Museumsinsel, einem Teil des Berliner Stadtzentrums, und ist von vielen anderen Sehenswürdigkeiten umgeben.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: ""
  },
  {
    name: "Humboldtforum",
    location: { latitude: 52.519171, longitude: 13.397500 },
    info: "Kultur- und Veranstaltungszentrum",
    extendedInfo: "Das Humboldtforum ist ein neues Kultur- und Veranstaltungszentrum in Berlin, das auf der Museumsinsel neben dem Berliner Dom und dem Alten Museum entsteht. Es soll ein Ort für Ausstellungen, Konzerte, Workshops und vieles mehr sein. Das Humboldtforum ist nach den Brüdern Alexander und Wilhelm von Humboldt benannt, die im 19. Jahrhundert bedeutende Gelehrte und Sammler waren.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: ""
  },
  {
    name: "Neue Wache als Ehrenmal",
    location: { latitude: 52.519528, longitude: 13.388083 },
    info: "Ehrenmal für die Opfer von Krieg und Gewaltherrschaft",
    extendedInfo: "Die Neue Wache auf dem Platz der Republik in Berlin-Mitte ist ein Ehrenmal für die Opfer von Krieg und Gewaltherrschaft. Es wurde in den 1960er Jahren umgebaut und beherbergt heute eine Ausstellung zur Erinnerung an die Opfer von Krieg und Gewaltherrschaft.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: ""
    },
    {
    name: "Humboldt-Universität",
    location: { latitude: 52.517833, longitude: 13.396916 },
    info: "Eine der ältesten Universitäten Berlins",
    extendedInfo: "Die Humboldt-Universität zu Berlin ist eine der ältesten Universitäten Berlins und eine der ältesten Universitäten Deutschlands. Sie wurde 1810 von den Brüdern Alexander und Wilhelm von Humboldt gegründet und gehört heute zu den renommiertesten Universitäten in Deutschland.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: ""
    },
    {
    name: "Die 'Kommode' (Alte Bibliothek)",
    location: { latitude: 52.519196, longitude: 13.396706 },
    info: "Ehemalige Bibliothek der Humboldt-Universität",
    extendedInfo: "Die 'Kommode' ist ein historisches Gebäude auf der Museumsinsel in Berlin. Es wurde 1775 als Bibliothek der damaligen Königlichen Akademie der Wissenschaften erbaut und diente später als Teil der Bibliothek der Humboldt-Universität zu Berlin. Heute befindet sich in dem Gebäude das Institut für Kunst- und Bildgeschichte der Humboldt-Universität.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
    audioUrl: ""
    },
    {
      name: "Staatsoper Unter den Linden",
      location: { latitude: 52.517027, longitude: 13.395833 },
      info: "Opernhaus in Berlin",
      extendedInfo: "Die Staatsoper Unter den Linden ist das bekannteste Opernhaus Berlins. Es wurde im 18. Jahrhundert erbaut und ist seitdem ein wichtiger Ort für Kulturveranstaltungen in Berlin. Das Gebäude wurde im Zweiten Weltkrieg schwer beschädigt und in den 1950er Jahren wieder aufgebaut. Heute ist die Staatsoper ein beliebter Ort für Opern, Konzerte und Ballettaufführungen.",
      icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
      audioUrl: ""
    },
    {
      name: "Reiterstandbild Friedrichs des Großen",
      location: { latitude: 52.516836, longitude: 13.395419 },
      info: "Reiterstandbild in Berlin",
      extendedInfo: "Das Reiterstandbild Friedrichs des Großen ist eine Bronzestatue des preußischen Königs Friedrich II. Es wurde im 19. Jahrhundert erbaut und steht auf dem Platz vor der Alten Nationalgalerie auf der Museumsinsel. Das Standbild ist ein wichtiger Teil des kulturellen Erbes Berlins und ein beliebter Ort für Touristen und Einheimische.",
      icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
      audioUrl: ""
    },
    {
      name: "Weltzeituhr",
      location: { latitude: 52.51629872917535, longitude: 13.37805398629472 },
      info: "Weltzeituhr in Berlin",
      extendedInfo: "Die Weltzeituhr ist eine öffentliche Uhr auf dem Alexanderplatz in Berlin. Sie wurde in den 1960er Jahren erbaut und zeigt die aktuelle Zeit in verschiedenen Städten auf der ganzen Welt an. Die Weltzeituhr ist ein beliebter Treffpunkt für Touristen und Einheimische und ein wichtiger Teil der Geschichte des Alexanderplatzes.",
      icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
      audioUrl: ""
    },
    {
      name: "Rotes Rathaus",
      location: { latitude: 52.5169248, longitude: 13.3958007 },
      info: "Rathaus in Berlin",
      extendedInfo: "Das Rote Rathaus ist das Rathaus der Stadt Berlin und ein bekanntes Wahrzeichen der Stadt. Das Gebäude wurde im 19. Jahrhundert erbaut und dient heute als Sitz des Regierenden Bürgermeisters von Berlin und des Senats. Das Rote Rathaus ist ein beliebter Ort für Touristen und Einheimische und bietet eine beeindruckende Kulisse für Veranstaltungen und Feierlichkeiten.",
      icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
      audioUrl: ""
    },
    {
      name: "Neptunbrunnen",
      location: { latitude: 52.522460, longitude: 13.413746 },
      info: "Famous Fountain in Berlin",
      extendedInfo: "The Neptunbrunnen is a famous fountain located in Berlin, Germany. It was built in the late 19th century and features a large statue of Neptune, the Roman god of the sea. The fountain is located in Alexanderplatz, a busy public square in the heart of Berlin, and is a popular tourist attraction.",
      icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg",
      audioUrl: ""
      },
].map((marker) => ({
  ...marker,
  locationObject: L.latLng(marker.location.latitude, marker.location.longitude),
}));

const Markers = ({ markers, nearestMarkers, onMarkerClick }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [liked, setLiked] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleLike = (markerName) => {
    setLiked({ ...liked, [markerName]: !liked[markerName] });
  };

  const handlePlayPause = (audioUrl) => {
    if (isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      const audio = new Audio(audioUrl);
      audio.play();
      setCurrentAudio(audio);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {Array.isArray(markers) &&
        markers.map((marker) => (
          <Marker
            key={marker.name}
            position={marker.locationObject}
            icon={L.icon({
              iconUrl: marker.icon,
              iconSize: [38, 38],
              iconAnchor: [22, 38],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -38],
            })}
          >
            <Popup className={nearestMarkers && nearestMarkers.includes(marker) ? "nearest-marker" : ""}>
              <p>{marker.name}</p>
              {showInfo ? (
                <p>{marker.extendedInfo}</p>
              ) : (
                <p>{marker.info}</p>
              )}
              <button
                onClick={() => handleLike(marker.name)}
                className={`like-button ${liked[marker.name] ? "liked" : ""}`}
              >
                {liked[marker.name] ? "Liked" : "Like"}
              </button>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="info-button"
              >
                Mehr Information
              </button>
              <br />
              <br />
              <button onClick={() => handlePlayPause(marker.audioUrl)} className="play-button">
                {isPlaying ? "Pause" : "Play"}
              </button>
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default Markers;