import "../../styles/WeatherCardBody.css";
import '../../styles/WeatherCardFooter.css'

export default function WeatherCardBody() {
  return (
    <section>
      <div className="weatherBodyDegrees">
        <span className="weatherDegree">18&deg;</span>
        <span className="weatherDesc">Sunny</span>
      </div>

      <div className="weatherBodyData weatherSnippet">
        <span className="weatherSnippetPrimary">precipitation</span>
        <span className="weatherSnippetSecondary">0 mm</span>
      </div>
    </section>
  );
}
