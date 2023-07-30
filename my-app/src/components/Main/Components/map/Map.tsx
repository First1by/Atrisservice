import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function YMap() {
  return (
    <div className="wpb_map_wraper">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.259629153178!2d27.600704977094235!3d53.90936217245787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfacdc877623%3A0xfaab6991c2013f9b!2zMTEsINGD0LsuINCf0LXRgtGA0YPRgdGPINCR0YDQvtCy0LrQuCAzMCwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1690486329242!5m2!1sru!2sby"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}

      <YMaps>
        <Map
          width="100%"
          height={450}
          defaultState={{
            center: [53.909326, 27.60143],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark defaultGeometry={[53.909326, 27.60143]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default YMap;
