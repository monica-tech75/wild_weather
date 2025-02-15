import { useEffect, useState } from "react";
import { useName } from "../context/NameContext";
import CitySearchBar from "../components/CitySearchBar";
import "../style/backgroundcloud.css";
import "../style/tagyourcity.css";
import "../style/nametagcommon.css";

function TagYourCity() {
  const { name, setName } = useName();

  useEffect(() => {
    const storedName = localStorage.getItem("nameStorage");
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  const [setResults] = useState([]);

  return (
    <section className="TagYourCity">
      <main className="maintagyourcity">
            <div className="inputnameandtag">
              <p>Thank you {name ? `${name}` : ""},</p>
              <p>Where do you live?</p>
            </div>
            <CitySearchBar setResults={setResults} />
      </main>
    </section>
  );
}

export default TagYourCity;
