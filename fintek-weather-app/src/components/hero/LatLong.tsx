import '../../styles/LatLong.css'

export default function LatLong(){

//call api on load to get current data
    return(
        <section id="latLongContainer">
        <div id="latLongData">
            <span className="latLong">latitude</span>
            <span className="latLong">longitude</span>
        </div>
        <span className="latLong">accurate to ... at ...</span>
        </section>
    )
}