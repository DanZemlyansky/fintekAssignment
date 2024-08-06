export default function LatLong(){

//call api on load to get current data
    return(
        <section id="latLongContainer">
        <span className="latLong">latitude</span>
        <span className="latLong">longitude</span>
        <span className="latLong">accurate to ... at ...</span>
        </section>
    )
}