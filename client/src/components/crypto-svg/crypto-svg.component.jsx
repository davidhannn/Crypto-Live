import React, { useEffect } from 'react'
import Anime, { anime } from 'react-anime';

const CryptoSVG = () => {

  function animation() {
    anime({
        targets: '.logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'linear',
        duration: 500,
        delay: function(el, i) { return i * 200 },
        direction: 'alternate',
        loop: false
      });
  }

  useEffect(() => {
    animation();
  }, [])

  return (
    <svg width="815" height="145" viewBox="0 0 815 145" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
      <mask id="path-1-outside-1_2_8" maskUnits="userSpaceOnUse" x="0" y="0" width="815" height="145" fill="black">
      <rect fill="white" width="815" height="145"/>
      <path d="M81.8203 78.5156C80.5547 89.3438 76.5469 97.7109 69.7969 103.617C63.0938 109.477 54.1641 112.406 43.0078 112.406C30.9141 112.406 21.2109 108.07 13.8984 99.3984C6.63281 90.7266 3 79.125 3 64.5938V54.75C3 45.2344 4.6875 36.8672 8.0625 29.6484C11.4844 22.4297 16.3125 16.8984 22.5469 13.0547C28.7812 9.16406 36 7.21875 44.2031 7.21875C55.0781 7.21875 63.7969 10.2656 70.3594 16.3594C76.9219 22.4062 80.7422 30.7969 81.8203 41.5312H68.25C67.0781 33.375 64.5234 27.4688 60.5859 23.8125C56.6953 20.1562 51.2344 18.3281 44.2031 18.3281C35.5781 18.3281 28.8047 21.5156 23.8828 27.8906C19.0078 34.2656 16.5703 43.3359 16.5703 55.1016V65.0156C16.5703 76.125 18.8906 84.9609 23.5312 91.5234C28.1719 98.0859 34.6641 101.367 43.0078 101.367C50.5078 101.367 56.25 99.6797 60.2344 96.3047C64.2656 92.8828 66.9375 86.9531 68.25 78.5156H81.8203Z"/>
      <path d="M135.047 46.5938C133.078 46.2656 130.945 46.1016 128.648 46.1016C120.117 46.1016 114.328 49.7344 111.281 57V111H98.2734V34.9219H110.93L111.141 43.7109C115.406 36.9141 121.453 33.5156 129.281 33.5156C131.812 33.5156 133.734 33.8438 135.047 34.5V46.5938Z"/>
      <path d="M173.227 91.9453L190.945 34.9219H204.867L174.281 122.742C169.547 135.398 162.023 141.727 151.711 141.727L149.25 141.516L144.398 140.602V130.055L147.914 130.336C152.32 130.336 155.742 129.445 158.18 127.664C160.664 125.883 162.703 122.625 164.297 117.891L167.18 110.156L140.039 34.9219H154.242L173.227 91.9453Z"/>
      <path d="M280.805 73.8047C280.805 85.3828 278.156 94.7109 272.859 101.789C267.562 108.867 260.391 112.406 251.344 112.406C242.109 112.406 234.844 109.477 229.547 103.617V140.25H216.539V34.9219H228.422L229.055 43.3594C234.352 36.7969 241.711 33.5156 251.133 33.5156C260.273 33.5156 267.492 36.9609 272.789 43.8516C278.133 50.7422 280.805 60.3281 280.805 72.6094V73.8047ZM267.797 72.3281C267.797 63.75 265.969 56.9766 262.312 52.0078C258.656 47.0391 253.641 44.5547 247.266 44.5547C239.391 44.5547 233.484 48.0469 229.547 55.0312V91.3828C233.438 98.3203 239.391 101.789 247.406 101.789C253.641 101.789 258.586 99.3281 262.242 94.4062C265.945 89.4375 267.797 82.0781 267.797 72.3281Z"/>
      <path d="M315.047 16.5V34.9219H329.25V44.9766H315.047V92.1562C315.047 95.2031 315.68 97.5 316.945 99.0469C318.211 100.547 320.367 101.297 323.414 101.297C324.914 101.297 326.977 101.016 329.602 100.453V111C326.18 111.938 322.852 112.406 319.617 112.406C313.805 112.406 309.422 110.648 306.469 107.133C303.516 103.617 302.039 98.625 302.039 92.1562V44.9766H288.188V34.9219H302.039V16.5H315.047Z"/>
      <path d="M339.656 72.2578C339.656 64.8047 341.109 58.1016 344.016 52.1484C346.969 46.1953 351.047 41.6016 356.25 38.3672C361.5 35.1328 367.477 33.5156 374.18 33.5156C384.539 33.5156 392.906 37.1016 399.281 44.2734C405.703 51.4453 408.914 60.9844 408.914 72.8906V73.8047C408.914 81.2109 407.484 87.8672 404.625 93.7734C401.812 99.6328 397.758 104.203 392.461 107.484C387.211 110.766 381.164 112.406 374.32 112.406C364.008 112.406 355.641 108.82 349.219 101.648C342.844 94.4766 339.656 84.9844 339.656 73.1719V72.2578ZM352.734 73.8047C352.734 82.2422 354.68 89.0156 358.57 94.125C362.508 99.2344 367.758 101.789 374.32 101.789C380.93 101.789 386.18 99.2109 390.07 94.0547C393.961 88.8516 395.906 81.5859 395.906 72.2578C395.906 63.9141 393.914 57.1641 389.93 52.0078C385.992 46.8047 380.742 44.2031 374.18 44.2031C367.758 44.2031 362.578 46.7578 358.641 51.8672C354.703 56.9766 352.734 64.2891 352.734 73.8047Z"/>
      <path d="M449.344 78.7266L451.312 92.2266L454.195 80.0625L474.445 8.625H485.836L505.594 80.0625L508.406 92.4375L510.586 78.6562L526.477 8.625H540.047L515.227 111H502.922L481.828 36.3984L480.211 28.5938L478.594 36.3984L456.727 111H444.422L419.672 8.625H433.172L449.344 78.7266Z"/>
      <path d="M597.633 111C596.883 109.5 596.273 106.828 595.805 102.984C589.758 109.266 582.539 112.406 574.148 112.406C566.648 112.406 560.484 110.297 555.656 106.078C550.875 101.812 548.484 96.4219 548.484 89.9062C548.484 81.9844 551.484 75.8438 557.484 71.4844C563.531 67.0781 572.016 64.875 582.938 64.875H595.594V58.8984C595.594 54.3516 594.234 50.7422 591.516 48.0703C588.797 45.3516 584.789 43.9922 579.492 43.9922C574.852 43.9922 570.961 45.1641 567.82 47.5078C564.68 49.8516 563.109 52.6875 563.109 56.0156H550.031C550.031 52.2188 551.367 48.5625 554.039 45.0469C556.758 41.4844 560.414 38.6719 565.008 36.6094C569.648 34.5469 574.734 33.5156 580.266 33.5156C589.031 33.5156 595.898 35.7188 600.867 40.125C605.836 44.4844 608.414 50.5078 608.602 58.1953V93.2109C608.602 100.195 609.492 105.75 611.273 109.875V111H597.633ZM576.047 101.086C580.125 101.086 583.992 100.031 587.648 97.9219C591.305 95.8125 593.953 93.0703 595.594 89.6953V74.0859H585.398C569.461 74.0859 561.492 78.75 561.492 88.0781C561.492 92.1562 562.852 95.3438 565.57 97.6406C568.289 99.9375 571.781 101.086 576.047 101.086Z"/>
      <path d="M646.641 16.5V34.9219H660.844V44.9766H646.641V92.1562C646.641 95.2031 647.273 97.5 648.539 99.0469C649.805 100.547 651.961 101.297 655.008 101.297C656.508 101.297 658.57 101.016 661.195 100.453V111C657.773 111.938 654.445 112.406 651.211 112.406C645.398 112.406 641.016 110.648 638.062 107.133C635.109 103.617 633.633 98.625 633.633 92.1562V44.9766H619.781V34.9219H633.633V16.5H646.641Z"/>
      <path d="M706.617 101.789C711.258 101.789 715.312 100.383 718.781 97.5703C722.25 94.7578 724.172 91.2422 724.547 87.0234H736.852C736.617 91.3828 735.117 95.5312 732.352 99.4688C729.586 103.406 725.883 106.547 721.242 108.891C716.648 111.234 711.773 112.406 706.617 112.406C696.258 112.406 688.008 108.961 681.867 102.07C675.773 95.1328 672.727 85.6641 672.727 73.6641V71.4844C672.727 64.0781 674.086 57.4922 676.805 51.7266C679.523 45.9609 683.414 41.4844 688.477 38.2969C693.586 35.1094 699.609 33.5156 706.547 33.5156C715.078 33.5156 722.156 36.0703 727.781 41.1797C733.453 46.2891 736.477 52.9219 736.852 61.0781H724.547C724.172 56.1562 722.297 52.125 718.922 48.9844C715.594 45.7969 711.469 44.2031 706.547 44.2031C699.938 44.2031 694.805 46.5938 691.148 51.375C687.539 56.1094 685.734 62.9766 685.734 71.9766V74.4375C685.734 83.2031 687.539 89.9531 691.148 94.6875C694.758 99.4219 699.914 101.789 706.617 101.789Z"/>
      <path d="M764.484 44.1328C770.25 37.0547 777.75 33.5156 786.984 33.5156C803.062 33.5156 811.172 42.5859 811.312 60.7266V111H798.305V60.6562C798.258 55.1719 796.992 51.1172 794.508 48.4922C792.07 45.8672 788.25 44.5547 783.047 44.5547C778.828 44.5547 775.125 45.6797 771.938 47.9297C768.75 50.1797 766.266 53.1328 764.484 56.7891V111H751.477V3H764.484V44.1328Z"/>
      </mask>
      <path d="M81.8203 78.5156C80.5547 89.3438 76.5469 97.7109 69.7969 103.617C63.0938 109.477 54.1641 112.406 43.0078 112.406C30.9141 112.406 21.2109 108.07 13.8984 99.3984C6.63281 90.7266 3 79.125 3 64.5938V54.75C3 45.2344 4.6875 36.8672 8.0625 29.6484C11.4844 22.4297 16.3125 16.8984 22.5469 13.0547C28.7812 9.16406 36 7.21875 44.2031 7.21875C55.0781 7.21875 63.7969 10.2656 70.3594 16.3594C76.9219 22.4062 80.7422 30.7969 81.8203 41.5312H68.25C67.0781 33.375 64.5234 27.4688 60.5859 23.8125C56.6953 20.1562 51.2344 18.3281 44.2031 18.3281C35.5781 18.3281 28.8047 21.5156 23.8828 27.8906C19.0078 34.2656 16.5703 43.3359 16.5703 55.1016V65.0156C16.5703 76.125 18.8906 84.9609 23.5312 91.5234C28.1719 98.0859 34.6641 101.367 43.0078 101.367C50.5078 101.367 56.25 99.6797 60.2344 96.3047C64.2656 92.8828 66.9375 86.9531 68.25 78.5156H81.8203Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M135.047 46.5938C133.078 46.2656 130.945 46.1016 128.648 46.1016C120.117 46.1016 114.328 49.7344 111.281 57V111H98.2734V34.9219H110.93L111.141 43.7109C115.406 36.9141 121.453 33.5156 129.281 33.5156C131.812 33.5156 133.734 33.8438 135.047 34.5V46.5938Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M173.227 91.9453L190.945 34.9219H204.867L174.281 122.742C169.547 135.398 162.023 141.727 151.711 141.727L149.25 141.516L144.398 140.602V130.055L147.914 130.336C152.32 130.336 155.742 129.445 158.18 127.664C160.664 125.883 162.703 122.625 164.297 117.891L167.18 110.156L140.039 34.9219H154.242L173.227 91.9453Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M280.805 73.8047C280.805 85.3828 278.156 94.7109 272.859 101.789C267.562 108.867 260.391 112.406 251.344 112.406C242.109 112.406 234.844 109.477 229.547 103.617V140.25H216.539V34.9219H228.422L229.055 43.3594C234.352 36.7969 241.711 33.5156 251.133 33.5156C260.273 33.5156 267.492 36.9609 272.789 43.8516C278.133 50.7422 280.805 60.3281 280.805 72.6094V73.8047ZM267.797 72.3281C267.797 63.75 265.969 56.9766 262.312 52.0078C258.656 47.0391 253.641 44.5547 247.266 44.5547C239.391 44.5547 233.484 48.0469 229.547 55.0312V91.3828C233.438 98.3203 239.391 101.789 247.406 101.789C253.641 101.789 258.586 99.3281 262.242 94.4062C265.945 89.4375 267.797 82.0781 267.797 72.3281Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M315.047 16.5V34.9219H329.25V44.9766H315.047V92.1562C315.047 95.2031 315.68 97.5 316.945 99.0469C318.211 100.547 320.367 101.297 323.414 101.297C324.914 101.297 326.977 101.016 329.602 100.453V111C326.18 111.938 322.852 112.406 319.617 112.406C313.805 112.406 309.422 110.648 306.469 107.133C303.516 103.617 302.039 98.625 302.039 92.1562V44.9766H288.188V34.9219H302.039V16.5H315.047Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M339.656 72.2578C339.656 64.8047 341.109 58.1016 344.016 52.1484C346.969 46.1953 351.047 41.6016 356.25 38.3672C361.5 35.1328 367.477 33.5156 374.18 33.5156C384.539 33.5156 392.906 37.1016 399.281 44.2734C405.703 51.4453 408.914 60.9844 408.914 72.8906V73.8047C408.914 81.2109 407.484 87.8672 404.625 93.7734C401.812 99.6328 397.758 104.203 392.461 107.484C387.211 110.766 381.164 112.406 374.32 112.406C364.008 112.406 355.641 108.82 349.219 101.648C342.844 94.4766 339.656 84.9844 339.656 73.1719V72.2578ZM352.734 73.8047C352.734 82.2422 354.68 89.0156 358.57 94.125C362.508 99.2344 367.758 101.789 374.32 101.789C380.93 101.789 386.18 99.2109 390.07 94.0547C393.961 88.8516 395.906 81.5859 395.906 72.2578C395.906 63.9141 393.914 57.1641 389.93 52.0078C385.992 46.8047 380.742 44.2031 374.18 44.2031C367.758 44.2031 362.578 46.7578 358.641 51.8672C354.703 56.9766 352.734 64.2891 352.734 73.8047Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M449.344 78.7266L451.312 92.2266L454.195 80.0625L474.445 8.625H485.836L505.594 80.0625L508.406 92.4375L510.586 78.6562L526.477 8.625H540.047L515.227 111H502.922L481.828 36.3984L480.211 28.5938L478.594 36.3984L456.727 111H444.422L419.672 8.625H433.172L449.344 78.7266Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M597.633 111C596.883 109.5 596.273 106.828 595.805 102.984C589.758 109.266 582.539 112.406 574.148 112.406C566.648 112.406 560.484 110.297 555.656 106.078C550.875 101.812 548.484 96.4219 548.484 89.9062C548.484 81.9844 551.484 75.8438 557.484 71.4844C563.531 67.0781 572.016 64.875 582.938 64.875H595.594V58.8984C595.594 54.3516 594.234 50.7422 591.516 48.0703C588.797 45.3516 584.789 43.9922 579.492 43.9922C574.852 43.9922 570.961 45.1641 567.82 47.5078C564.68 49.8516 563.109 52.6875 563.109 56.0156H550.031C550.031 52.2188 551.367 48.5625 554.039 45.0469C556.758 41.4844 560.414 38.6719 565.008 36.6094C569.648 34.5469 574.734 33.5156 580.266 33.5156C589.031 33.5156 595.898 35.7188 600.867 40.125C605.836 44.4844 608.414 50.5078 608.602 58.1953V93.2109C608.602 100.195 609.492 105.75 611.273 109.875V111H597.633ZM576.047 101.086C580.125 101.086 583.992 100.031 587.648 97.9219C591.305 95.8125 593.953 93.0703 595.594 89.6953V74.0859H585.398C569.461 74.0859 561.492 78.75 561.492 88.0781C561.492 92.1562 562.852 95.3438 565.57 97.6406C568.289 99.9375 571.781 101.086 576.047 101.086Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M646.641 16.5V34.9219H660.844V44.9766H646.641V92.1562C646.641 95.2031 647.273 97.5 648.539 99.0469C649.805 100.547 651.961 101.297 655.008 101.297C656.508 101.297 658.57 101.016 661.195 100.453V111C657.773 111.938 654.445 112.406 651.211 112.406C645.398 112.406 641.016 110.648 638.062 107.133C635.109 103.617 633.633 98.625 633.633 92.1562V44.9766H619.781V34.9219H633.633V16.5H646.641Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M706.617 101.789C711.258 101.789 715.312 100.383 718.781 97.5703C722.25 94.7578 724.172 91.2422 724.547 87.0234H736.852C736.617 91.3828 735.117 95.5312 732.352 99.4688C729.586 103.406 725.883 106.547 721.242 108.891C716.648 111.234 711.773 112.406 706.617 112.406C696.258 112.406 688.008 108.961 681.867 102.07C675.773 95.1328 672.727 85.6641 672.727 73.6641V71.4844C672.727 64.0781 674.086 57.4922 676.805 51.7266C679.523 45.9609 683.414 41.4844 688.477 38.2969C693.586 35.1094 699.609 33.5156 706.547 33.5156C715.078 33.5156 722.156 36.0703 727.781 41.1797C733.453 46.2891 736.477 52.9219 736.852 61.0781H724.547C724.172 56.1562 722.297 52.125 718.922 48.9844C715.594 45.7969 711.469 44.2031 706.547 44.2031C699.938 44.2031 694.805 46.5938 691.148 51.375C687.539 56.1094 685.734 62.9766 685.734 71.9766V74.4375C685.734 83.2031 687.539 89.9531 691.148 94.6875C694.758 99.4219 699.914 101.789 706.617 101.789Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
      <path d="M764.484 44.1328C770.25 37.0547 777.75 33.5156 786.984 33.5156C803.062 33.5156 811.172 42.5859 811.312 60.7266V111H798.305V60.6562C798.258 55.1719 796.992 51.1172 794.508 48.4922C792.07 45.8672 788.25 44.5547 783.047 44.5547C778.828 44.5547 775.125 45.6797 771.938 47.9297C768.75 50.1797 766.266 53.1328 764.484 56.7891V111H751.477V3H764.484V44.1328Z" stroke="#47C2BE" stroke-width="6" mask="url(#path-1-outside-1_2_8)"/>
    </svg>
  )
}

export default CryptoSVG