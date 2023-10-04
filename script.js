
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbnQtcml2eWwiLCJhIjoiY2xsenYxbWF0MW12dzNkcGp2dTluZGw5NCJ9.B6o4PP_fm3fQyTHhhdl1IQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/grant-rivyl/cllzv42nm00od01pbeyzv4cio', // style URL
        center: [-98.42511679164468, 40.25109284208392], // starting position [lng, lat]
        zoom: 4, // starting zoom 5.5 default
        maxZoom: 20, // Maximum allowed zoom level
        minZoom: 4 // Minimum allowed zoom level
    });
    var markerIcon = {
        width: 25,
        height: 32,
        // You can use a custom icon image URL
        // Example URL: 'https://example.com/custom-marker-icon.png'
        url: 'https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f3f949ab86dd89fd2d4b90_marker.png',
    };


    var locations = [
        { coordinates: [-80.07732394674925, 26.396100698402616], name: 'PharmaLogic HQ', address: '5301 N Federal Hwy Suite 280 Boca Raton, Florida 33487', phone: '561-416-0085'},
        { coordinates: [-104.837916672881, 39.7454545938203], name: 'PharmaLogic Denver', address: '2115 N Scranton St. Suite 1065, Bioscience Building #3 Anschutz, Aurora CO 80045', phone: '303 343 1016', manager: 'Douglas Smit, PharmD' },
        { coordinates: [-89.5992274739944, 40.70159797925901], name: 'Hot Shots Nuclear Medicine - Peoria', address: '1127 N. North Street, Peoria IL, 61606', phone: '309 676 1600', manager: 'Matthew Kalinsky, PharmD' },
        { coordinates: [-88.9837513604413, 42.3225264873472], name: 'Hot Shots Nuclear Medicine - Rockford', address: '4186 N Perryville Road, Loves Park IL 61111', phone: '815 484 0500', manager: 'Zach Carson, PharmD'  },
        { coordinates: [-87.5375829164199, 37.981535903458], name: 'Radiopharmacy of Evansville', address: '1409 East Virginia Street, Evansville IN 47711', phone: '812 421 1002', manager: 'Jason Wilson'  },
        { coordinates: [-91.6490901604541, 41.9896694869431], name: 'Hot Shots Nuclear Medicine - Cedar Rapids', address: '1601 First Avenue SE, Cedar Rapids IA 62402', phone: '319 363 4425', manager: 'Brett Hamann, PharmD'  },
        { coordinates: [-90.5466911162901, 41.5562642264184], name: 'Hot Shots Nuclear Medicine - Davenport', address: '2017 E Kimberly Road, Davenport IA 52807', phone: '563 391 9991', manager: 'Scott Temple, PharmD'  },
        { coordinates: [-88.6383760894682, 37.0595971596395], name: 'Radiopharmacy of Paducah', address: '230 Berger Road, Paducah KY 42003', phone: '270 442 9527', manager: 'Eli Alexander'  },
        { coordinates: [-69.8187311315267, 44.3181888708888], name: 'PharmaLogic Maine', address: '12 Edison Drive, Augusta ME 04330', phone: '207 626 9000', manager: 'Kevin Hart'  },
        { coordinates: [-84.5018383604275, 42.6785319089674], name: 'Hot Shots Nuclear Medicine - Lansing', address: '3960 Patient Care Way Suite 105, Lansing MI 48911', phone: '517 887 3131', manager: 'David Allen, PharmD'  },
        { coordinates: [-87.4565312314349, 46.5523436994776], name: 'Hot Shots Nuclear Medicine - Marquette', address: '3145 Wright Street, Marquette MI49855', phone: '906 273 1306', manager: 'Allen R. Doan, PharmD, ARRT(N), BCNP'  },
        { coordinates: [-85.6197972738372, 44.7477211269669], name: 'PharmaLogic Traverse City', address: '1501 South Cass Street Suite E, Traverse City MI 49684', phone: '231 929 7200', manager: 'Dana Suttle'  },
        { coordinates: [-92.253340489409, 38.7674756108091], name: 'Mid-America Isotopes - Ashland', address: '706 East Liberty Lane, Ashland MO 65010', phone: '573 657 1776', manager: 'Brent McHugh'  },
        { coordinates: [-92.3411842317309, 38.9321674138458], name: 'Essential Isotopes', address: '1513 Research Park Drive, Columbia MO 65211', phone: '573 882 0245', manager: 'Brent McHugh'  },
        { coordinates: [-114.054251904436, 46.9101890461989], name: 'PharmaLogic Missoula', address: '4404 Expressway Suite 109, Missoula MT 59808', phone: '406 830 3421', manager: 'Ruth Mary Wetzel'  },
        { coordinates: [-74.9674768163512, 39.9095386349286], name: 'NDP - Cherry Hill', address: '2 Keystone Avenue Suite 200, Cherry Hill NJ 08003', phone: '856 489 5733', manager: 'Gavin Kahn'  },
        { coordinates: [-74.490331602822, 40.9275073048039], name: 'NDP - Rockaway', address: '101 Roundhill Drive, Rockaway NJ 07866', phone: '973 664 9696', manager: 'Saket Chaudhari'  },
        { coordinates: [-73.8390435739179, 42.7163177736593], name: 'PharmaLogic Albany', address: '14 Walker Way Suite 5, Albany NY 12205', phone: '518 713 2068', manager: 'Tim Summers'  },
        { coordinates: [-73.4632011298105, 40.7913582489975], name: 'NDP - Plainview', address: '130 Commercial Street Suite 1, Plainview NY 11803', phone: '516 575 4201', manager: 'Tom Boland'  }, 
        { coordinates: [-76.1079655297229, 43.0849806141281], name: 'PharmaLogic Syracuse', address: '6464 Ridings Road Suite 101, Syracuse NY 13206', phone: '315 463 6451', manager: 'Christine Brown'  }, 
        { coordinates: [-76.5443051181265, 41.9860064189798], name: 'PharmaLogic Sayre', address: '2608 Elmira Street Suite 3, Sayre PA 18840', phone: '570 882 9068', manager: 'Laurie Stallings, PharmD, BCNP'  }, 
        { coordinates: [-66.0673936321906, 18.4244172045269], name: 'PharmaLogic Puerto Rico', address: '150 Federico Costa Suite 1, San Juan PR 00918', phone: '787 765 5598', manager: 'Eduardo Diaz, BCNP'  }, 
        { coordinates: [-82.4857675183265, 36.3977678965168], name: 'Clinical Pharmacy Services', address: '101 Dillon Court, Gray TN 37615', phone: '423 477 2440', manager: 'Jon McReynolds'  }, 
        { coordinates: [-82.4855301183265, 36.3981611881165], name: 'Precision Nuclear', address: '830 Suncrest Drive, Gray TN 37615', phone: '423 476 0050', manager: 'Jeremiah Taylor'  }, 
        { coordinates: [-98.2414179144686, 26.18757921895177], name: 'Rio Grande Valley Isotopes', address: '1717 Savannah Avenue, McAllen TX 78503', phone: '956 322 3108', manager: 'Lucio Garza'  }, 
        { coordinates: [-73.1267654468659, 44.44739945258], name: 'PharmaLogic Burlington', address: '1191 Brownell Road Suite 40, Williston VT 05495', phone: '802 862 9944', manager: 'Seung Han'  }, 
        { coordinates: [-80.03510030295269, 37.27413974616126], name: 'Blue Ridge Isotopes', address: '1630 Midland Road, Salem, VA 24153', phone: '540 389 8333', manager: 'Ben Fredrick'  },
        { coordinates: [-80.0348316317887, 37.2742895207341], name: 'Blue Ridge Isotopes', address: '1634 Midland Road, Salem VA 24135', phone: '540 389 8333', manager: 'Ben Fredrick'  }, 
        { coordinates: [-80.0344409894609, 37.2743834082365], name: 'Precision Nuclear', address: '1635 Midland Road, Salem VA 24135', phone: '541 389 8333', manager: 'Ben Fredrick'  }, 
        { coordinates: [-80.2231132716373, 39.3142678445295], name: 'PharmaLogic Bridgeport', address: '#9 W Benedum Industrial Park Dr, Bridgeport WV 26330', phone: '304 842 0935', manager: 'Shelby Griffith'  }, 
        { coordinates: [-82.3200050317494, 38.4087039141528], name: 'PharmaLogic Huntington', address: '5842 B. Davis Creek Road, Barboursville WV 25504', phone: '304 955 6801', manager: 'Garth Kistner'  }, 
        { coordinates: [-88.0531269315784, 43.0139139776462], name: 'Wisconsin Medical Cyclotron & Radiopharmacy', address: '11236 W Lapham Street, West Allis, WI 53214', phone: '414 771 4208', manager: 'Daren Pribyl, RPh, BCNP'  }, 
        { coordinates: [-106.281092046929, 42.8501018765844], name: 'PharmaLogic Wyoming', address: '3480 Trigood Drive, Casper WY 82609', phone: '307 261 7000', manager: 'James Cordonier'  },
        { coordinates: [-90.5467554886177, 41.5562642264173], name: 'Midwest Positron Technology', address: '2017 E Kimberly Road, Davenport IA 52807', phone: '563 391 0404', manager: 'Tom Gorman'  },
        { coordinates: [-84.50481958867964, 39.14040214867403], name: 'PharmaLogic Cincinnati', address: '200 Albert Sabin Way, Rm G310, Cincinnati OH 45267', phone: 'N/A', manager: 'N/A'  },
        { coordinates: [-82.48574605990945, 36.397724717396585], name: 'Clinical Pharmacy Services', address: '101 Dillon Court, Gray, TN 37615', phone: '423 477 2440', manager: 'Jon McReynolds'  },   
        //Canada Locations
        { coordinates: [-123.12310670188837, 49.26105100187108], name: 'Isologic Vancouver', address: '899 West 12th Avenue, Vancouver, BC, Canada V5Z 1 M9', phone: '604 875 5085', manager: 'Ann Blythe'  },
        { coordinates: [-79.75394085973238, 43.3893234147199], name: 'Isologic Burlington', address: '5450 Harvester Road, Burlington, ON, Canada L7L5N5', phone: '905 333 1789', manager: 'Raymond Taylor'  },
        { coordinates: [-79.37804663088728, 43.721046956538984], name: 'Isologic Toronto', address: '2075 Bayview Avenue, Toronto, ON, Canada M4N3M5', phone: '416 488 7738', manager: 'Thomas Armstrong'  },
        { coordinates: [-75.72136764618354, 45.3927905848788], name: 'Isologic Ottawa', address: '1053 Carling Avenue, Suite F156, Ottawa, ON, Canada K1Y4E9', phone: '613 761 5370', manager: ' Georgina Avila'  },
        { coordinates: [-73.72595515041814, 45.460766619340426], name: 'Isologic Dorval', address: '11215 Chermin de la Cote-De-Liesse Dorval, Quebec, Canada H9P181', phone: '418 650 1623', manager: 'Marc-Andre Michaud'  },
        { coordinates: [-71.3056839737528, 46.79001828644972], name: 'Isologic Quebec City', address: '2655 Rue Dalton, Quebec, QC G1P 3S8', phone: '418 650 1623', manager: 'Ian Lagotte'  },
        { coordinates: [-73.70786014682467, 45.460755449681535], name: 'Isologic Montreal', address: '11215 Chermin de la Cote-De-Liesse Dorval, Quebec, Canada H9P181', phone: '514 636 5552', manager: 'Josie Mancuso'  },
        { coordinates: [-112.00731719999999, 43.533146108602544], name: 'PharmaLogic Idaho Falls', address: '4077 Commerce Circle, Idaho Falls, Idaho 83401', phone: '208 419 0026', manager: 'Gary Smith'  },
        { coordinates: [-111.90209330501631, 40.659452137649254], name: 'PharmaLogic Salt Lake City', address: '383 West Vine Street, Suite 101, Murray, UT 84123', phone: 'N/A', manager: 'Kylo Nelson'  },
        { coordinates: [-97.6903123191848, 30.375960595826715], name: 'PharmaLogic Austin', address: '10600 N Lamar Boulevard, Austin, TX 78753', phone: 'N/A', manager: 'Grant Pearson'  },
        { coordinates: [-73.9094574626766, 40.80886230096631], name: 'PharmaLogic New York Bronx', address: '390 Concord Avenue, Bronx, New York 10454', phone: 'N/A', manager: 'Adrryl Addison'  },
        { coordinates: [-118.19997932081174, 34.062858129469134], name: 'PharmaLogic Los Angeles', address: '2250 Alcazar Street, Los Angeles, CA 90033', phone: '213 647 4253', manager: 'Andy Luong'  }
        
        // Add more locations here
    ];


    locations.forEach(location => {
                var el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = `url(${markerIcon.url})`;
                el.style.width = `${markerIcon.width}px`;
                el.style.height = `${markerIcon.height}px`;
                el.style.backgroundSize = `contain`;
                el.style.cursor = `pointer`;
                el.style.borderRadius = `50%`;
    
                if(location.fax) {
                    var popupContent = `
                    <div class="mapboxgl-popup-close-button" id="closeButton"></div>
                    <h3>${location.name}</h3>
                    <div class="mapboxgl-info-box"><img src="https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f3f949f762b61424ed1f48_address.png" alt="address"><div class="mapboxgl-details-wrap"><p class="mapboxgl-title">Address</p><p>${location.address}</p></div></div>
                    <div class="mapboxgl-info-box"><img src="https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f3f949d23cc79439ff0abc_phone.png" alt="phone"><div class="mapboxgl-details-wrap"><p class="mapboxgl-title">Phone</p><a href="tel:${location.phone}" class="tel-link"><p>${location.phone}</p></a></div></div>
                    <div class="mapboxgl-info-box"><img src="https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f814a283a1ce0044c828ad_fax.png" alt="fax"><div class="mapboxgl-details-wrap"><p class="mapboxgl-title">Fax</p><p>${location.fax}</p></div></div>
                    `;
    
                } else {
                        var popupContent = `
                    <div class="mapboxgl-popup-close-button" id="closeButton"></div>
                    <h3>${location.name}</h3>
                    <div class="mapboxgl-info-box"><img src="https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f3f949f762b61424ed1f48_address.png" alt="address"><div class="mapboxgl-details-wrap"><p class="mapboxgl-title">Address</p><p>${location.address}</p></div></div>
                    <div class="mapboxgl-info-box"><img src="https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f3f949d23cc79439ff0abc_phone.png" alt="phone"><div class="mapboxgl-details-wrap"><a href="tel:${location.phone}" class="tel-link"><p class="mapboxgl-title">Phone</p><p>${location.phone}</p></a></div></div>
                    <div class="mapboxgl-info-box"><img src="https://uploads-ssl.webflow.com/64d06e255ddb74375239ba9e/64f3f94991d62e0490aa8cdc_manager.png" alt="manager"><div class="mapboxgl-details-wrap"><p class="mapboxgl-title">Pharmacy Manager</p><p>${location.manager}</p></div></div>
                    `;
                }
                    
    
    
    
    
    
    
    
                new mapboxgl.Marker(el)
                    .setLngLat(location.coordinates)
                    .addTo(map);
                el.addEventListener('click', () => {
                    // Show the custom popup
                    var customPopup = document.getElementById('customPopup');
                    customPopup.innerHTML = popupContent;
    
                    // Add a close button event
                    var closeButton = document.getElementById('closeButton');
                    closeButton.addEventListener('click', () => {
                        customPopup.style.display = 'none';
                    });
    
    
                    customPopup.style.display = 'block';
                   
                });
            });
            map.addControl(new mapboxgl.NavigationControl());
   