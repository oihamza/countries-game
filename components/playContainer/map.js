import styles from "./PlayContainer.module.scss";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const mapWidth = 1000;
const mapHeight = 460;

const colors = {
  Africa: "#22b40a",
  Asia: "#c6be0e",
  Europe: "#0a3ab4",
  NorthAmerica: "#690ab4",
  SouthAmerica: "#00c5c5",
  Oceania: "#b40a0a",
};
export default function Map({
  countriesDone,
  time,
  abbs,
  data,
  started,
  allContinents,
}) {
  return (
    <div className={styles.mapContainer}>
      <div
        className={started ? `${styles.score} ${styles.started}` : styles.score}
      >
        <div>{`${time[0]}:${time[1]}`}</div>
        <div>{countriesDone.length}/195</div>
      </div>
      <ComposableMap height={mapHeight} width={mapWidth}>
        <ZoomableGroup
          zoom={1}
          maxZoom={6}
          translateExtent={[
            [0, 0],
            [mapWidth, mapHeight],
          ]}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                let abbrev = geo.properties.ABBREV.split(".").join("");
                let cont = geo.properties.CONTINENT.split(" ").join("");
                data[geo.properties.NAME.toLowerCase()] = geo.properties;
                abbs[abbrev.toLowerCase()] = geo.properties;
                console.log(1);
                if (
                  allContinents[cont] !== undefined &&
                  allContinents[cont].includes(geo.properties.NAME) === false
                ) {
                  allContinents[cont] = [
                    ...allContinents[cont],
                    geo.properties.NAME,
                  ];
                }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: countriesDone.includes(
                          geo.properties.NAME.toLowerCase()
                        )
                          ? colors[geo.properties.CONTINENT.split(" ").join("")]
                          : "#D6D6DA",
                        stroke: "#fff",
                        outline: "none",
                      },
                      hover: {
                        fill: countriesDone.includes(
                          geo.properties.NAME.toLowerCase()
                        )
                          ? colors[geo.properties.CONTINENT.split(" ").join("")]
                          : "#D6D6DA",
                        stroke: "#fff",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#D6D6DA",
                        stroke: "#fff",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
