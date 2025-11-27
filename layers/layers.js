var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_LokalplanHvidovre_1 = new ol.format.GeoJSON();
var features_LokalplanHvidovre_1 = format_LokalplanHvidovre_1.readFeatures(json_LokalplanHvidovre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanHvidovre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanHvidovre_1.addFeatures(features_LokalplanHvidovre_1);
var lyr_LokalplanHvidovre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanHvidovre_1, 
                style: style_LokalplanHvidovre_1,
                popuplayertitle: 'Lokalplan Hvidovre',
                interactive: true,
    title: 'Lokalplan Hvidovre<br />\
    <img src="styles/legend/LokalplanHvidovre_1_0.png" /> 001<br />\
    <img src="styles/legend/LokalplanHvidovre_1_1.png" /> 101-1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_2.png" /> 102<br />\
    <img src="styles/legend/LokalplanHvidovre_1_3.png" /> 103<br />\
    <img src="styles/legend/LokalplanHvidovre_1_4.png" /> 104<br />\
    <img src="styles/legend/LokalplanHvidovre_1_5.png" /> 105<br />\
    <img src="styles/legend/LokalplanHvidovre_1_6.png" /> 106<br />\
    <img src="styles/legend/LokalplanHvidovre_1_7.png" /> 108<br />\
    <img src="styles/legend/LokalplanHvidovre_1_8.png" /> 109-1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_9.png" /> 112<br />\
    <img src="styles/legend/LokalplanHvidovre_1_10.png" /> 115<br />\
    <img src="styles/legend/LokalplanHvidovre_1_11.png" /> 116<br />\
    <img src="styles/legend/LokalplanHvidovre_1_12.png" /> 118<br />\
    <img src="styles/legend/LokalplanHvidovre_1_13.png" /> 119<br />\
    <img src="styles/legend/LokalplanHvidovre_1_14.png" /> 120<br />\
    <img src="styles/legend/LokalplanHvidovre_1_15.png" /> 121<br />\
    <img src="styles/legend/LokalplanHvidovre_1_16.png" /> 122<br />\
    <img src="styles/legend/LokalplanHvidovre_1_17.png" /> 124<br />\
    <img src="styles/legend/LokalplanHvidovre_1_18.png" /> 126<br />\
    <img src="styles/legend/LokalplanHvidovre_1_19.png" /> 127<br />\
    <img src="styles/legend/LokalplanHvidovre_1_20.png" /> 128<br />\
    <img src="styles/legend/LokalplanHvidovre_1_21.png" /> 131<br />\
    <img src="styles/legend/LokalplanHvidovre_1_22.png" /> 132<br />\
    <img src="styles/legend/LokalplanHvidovre_1_23.png" /> 133<br />\
    <img src="styles/legend/LokalplanHvidovre_1_24.png" /> 134<br />\
    <img src="styles/legend/LokalplanHvidovre_1_25.png" /> 135<br />\
    <img src="styles/legend/LokalplanHvidovre_1_26.png" /> 137<br />\
    <img src="styles/legend/LokalplanHvidovre_1_27.png" /> 139<br />\
    <img src="styles/legend/LokalplanHvidovre_1_28.png" /> 140<br />\
    <img src="styles/legend/LokalplanHvidovre_1_29.png" /> 141<br />\
    <img src="styles/legend/LokalplanHvidovre_1_30.png" /> 142<br />\
    <img src="styles/legend/LokalplanHvidovre_1_31.png" /> 143<br />\
    <img src="styles/legend/LokalplanHvidovre_1_32.png" /> 144<br />\
    <img src="styles/legend/LokalplanHvidovre_1_33.png" /> 147<br />\
    <img src="styles/legend/LokalplanHvidovre_1_34.png" /> 148<br />\
    <img src="styles/legend/LokalplanHvidovre_1_35.png" /> 149<br />\
    <img src="styles/legend/LokalplanHvidovre_1_36.png" /> 150<br />\
    <img src="styles/legend/LokalplanHvidovre_1_37.png" /> 151<br />\
    <img src="styles/legend/LokalplanHvidovre_1_38.png" /> 152<br />\
    <img src="styles/legend/LokalplanHvidovre_1_39.png" /> 154<br />\
    <img src="styles/legend/LokalplanHvidovre_1_40.png" /> 202<br />\
    <img src="styles/legend/LokalplanHvidovre_1_41.png" /> 203<br />\
    <img src="styles/legend/LokalplanHvidovre_1_42.png" /> 206<br />\
    <img src="styles/legend/LokalplanHvidovre_1_43.png" /> 207<br />\
    <img src="styles/legend/LokalplanHvidovre_1_44.png" /> 208<br />\
    <img src="styles/legend/LokalplanHvidovre_1_45.png" /> 209<br />\
    <img src="styles/legend/LokalplanHvidovre_1_46.png" /> 210<br />\
    <img src="styles/legend/LokalplanHvidovre_1_47.png" /> 211<br />\
    <img src="styles/legend/LokalplanHvidovre_1_48.png" /> 216<br />\
    <img src="styles/legend/LokalplanHvidovre_1_49.png" /> 220<br />\
    <img src="styles/legend/LokalplanHvidovre_1_50.png" /> 221<br />\
    <img src="styles/legend/LokalplanHvidovre_1_51.png" /> 225<br />\
    <img src="styles/legend/LokalplanHvidovre_1_52.png" /> 226<br />\
    <img src="styles/legend/LokalplanHvidovre_1_53.png" /> 228<br />\
    <img src="styles/legend/LokalplanHvidovre_1_54.png" /> 229<br />\
    <img src="styles/legend/LokalplanHvidovre_1_55.png" /> 230<br />\
    <img src="styles/legend/LokalplanHvidovre_1_56.png" /> 231<br />\
    <img src="styles/legend/LokalplanHvidovre_1_57.png" /> 232<br />\
    <img src="styles/legend/LokalplanHvidovre_1_58.png" /> 233<br />\
    <img src="styles/legend/LokalplanHvidovre_1_59.png" /> 234<br />\
    <img src="styles/legend/LokalplanHvidovre_1_60.png" /> 236<br />\
    <img src="styles/legend/LokalplanHvidovre_1_61.png" /> 237<br />\
    <img src="styles/legend/LokalplanHvidovre_1_62.png" /> 238<br />\
    <img src="styles/legend/LokalplanHvidovre_1_63.png" /> 239<br />\
    <img src="styles/legend/LokalplanHvidovre_1_64.png" /> 240<br />\
    <img src="styles/legend/LokalplanHvidovre_1_65.png" /> 241<br />\
    <img src="styles/legend/LokalplanHvidovre_1_66.png" /> 301-1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_67.png" /> 303<br />\
    <img src="styles/legend/LokalplanHvidovre_1_68.png" /> 304<br />\
    <img src="styles/legend/LokalplanHvidovre_1_69.png" /> 305<br />\
    <img src="styles/legend/LokalplanHvidovre_1_70.png" /> 306<br />\
    <img src="styles/legend/LokalplanHvidovre_1_71.png" /> 313<br />\
    <img src="styles/legend/LokalplanHvidovre_1_72.png" /> 314<br />\
    <img src="styles/legend/LokalplanHvidovre_1_73.png" /> 316<br />\
    <img src="styles/legend/LokalplanHvidovre_1_74.png" /> 322<br />\
    <img src="styles/legend/LokalplanHvidovre_1_75.png" /> 323<br />\
    <img src="styles/legend/LokalplanHvidovre_1_76.png" /> 324<br />\
    <img src="styles/legend/LokalplanHvidovre_1_77.png" /> 325<br />\
    <img src="styles/legend/LokalplanHvidovre_1_78.png" /> 326<br />\
    <img src="styles/legend/LokalplanHvidovre_1_79.png" /> 327<br />\
    <img src="styles/legend/LokalplanHvidovre_1_80.png" /> 328<br />\
    <img src="styles/legend/LokalplanHvidovre_1_81.png" /> 329<br />\
    <img src="styles/legend/LokalplanHvidovre_1_82.png" /> 330<br />\
    <img src="styles/legend/LokalplanHvidovre_1_83.png" /> 331<br />\
    <img src="styles/legend/LokalplanHvidovre_1_84.png" /> 332<br />\
    <img src="styles/legend/LokalplanHvidovre_1_85.png" /> 335<br />\
    <img src="styles/legend/LokalplanHvidovre_1_86.png" /> 338<br />\
    <img src="styles/legend/LokalplanHvidovre_1_87.png" /> 339<br />\
    <img src="styles/legend/LokalplanHvidovre_1_88.png" /> 340<br />\
    <img src="styles/legend/LokalplanHvidovre_1_89.png" /> 341<br />\
    <img src="styles/legend/LokalplanHvidovre_1_90.png" /> 342<br />\
    <img src="styles/legend/LokalplanHvidovre_1_91.png" /> 343<br />\
    <img src="styles/legend/LokalplanHvidovre_1_92.png" /> 345<br />\
    <img src="styles/legend/LokalplanHvidovre_1_93.png" /> 403-1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_94.png" /> 404<br />\
    <img src="styles/legend/LokalplanHvidovre_1_95.png" /> 405<br />\
    <img src="styles/legend/LokalplanHvidovre_1_96.png" /> 407<br />\
    <img src="styles/legend/LokalplanHvidovre_1_97.png" /> 408<br />\
    <img src="styles/legend/LokalplanHvidovre_1_98.png" /> 409<br />\
    <img src="styles/legend/LokalplanHvidovre_1_99.png" /> 411<br />\
    <img src="styles/legend/LokalplanHvidovre_1_100.png" /> 412<br />\
    <img src="styles/legend/LokalplanHvidovre_1_101.png" /> 418<br />\
    <img src="styles/legend/LokalplanHvidovre_1_102.png" /> 423<br />\
    <img src="styles/legend/LokalplanHvidovre_1_103.png" /> 429<br />\
    <img src="styles/legend/LokalplanHvidovre_1_104.png" /> 432<br />\
    <img src="styles/legend/LokalplanHvidovre_1_105.png" /> 433<br />\
    <img src="styles/legend/LokalplanHvidovre_1_106.png" /> 440<br />\
    <img src="styles/legend/LokalplanHvidovre_1_107.png" /> 441<br />\
    <img src="styles/legend/LokalplanHvidovre_1_108.png" /> 447<br />\
    <img src="styles/legend/LokalplanHvidovre_1_109.png" /> 448<br />\
    <img src="styles/legend/LokalplanHvidovre_1_110.png" /> 452<br />\
    <img src="styles/legend/LokalplanHvidovre_1_111.png" /> 454<br />\
    <img src="styles/legend/LokalplanHvidovre_1_112.png" /> 455<br />\
    <img src="styles/legend/LokalplanHvidovre_1_113.png" /> 456<br />\
    <img src="styles/legend/LokalplanHvidovre_1_114.png" /> 457<br />\
    <img src="styles/legend/LokalplanHvidovre_1_115.png" /> 458<br />\
    <img src="styles/legend/LokalplanHvidovre_1_116.png" /> 459<br />\
    <img src="styles/legend/LokalplanHvidovre_1_117.png" /> 462<br />\
    <img src="styles/legend/LokalplanHvidovre_1_118.png" /> 463<br />\
    <img src="styles/legend/LokalplanHvidovre_1_119.png" /> 464<br />\
    <img src="styles/legend/LokalplanHvidovre_1_120.png" /> 466<br />\
    <img src="styles/legend/LokalplanHvidovre_1_121.png" /> 467<br />\
    <img src="styles/legend/LokalplanHvidovre_1_122.png" /> 468<br />\
    <img src="styles/legend/LokalplanHvidovre_1_123.png" /> 469<br />\
    <img src="styles/legend/LokalplanHvidovre_1_124.png" /> 470<br />\
    <img src="styles/legend/LokalplanHvidovre_1_125.png" /> 471<br />\
    <img src="styles/legend/LokalplanHvidovre_1_126.png" /> 472<br />\
    <img src="styles/legend/LokalplanHvidovre_1_127.png" /> 473<br />\
    <img src="styles/legend/LokalplanHvidovre_1_128.png" /> 475<br />\
    <img src="styles/legend/LokalplanHvidovre_1_129.png" /> 476<br />\
    <img src="styles/legend/LokalplanHvidovre_1_130.png" /> 504<br />\
    <img src="styles/legend/LokalplanHvidovre_1_131.png" /> 507<br />\
    <img src="styles/legend/LokalplanHvidovre_1_132.png" /> 508<br />\
    <img src="styles/legend/LokalplanHvidovre_1_133.png" /> 510<br />\
    <img src="styles/legend/LokalplanHvidovre_1_134.png" /> 511<br />\
    <img src="styles/legend/LokalplanHvidovre_1_135.png" /> 516<br />\
    <img src="styles/legend/LokalplanHvidovre_1_136.png" /> 518<br />\
    <img src="styles/legend/LokalplanHvidovre_1_137.png" /> 519<br />\
    <img src="styles/legend/LokalplanHvidovre_1_138.png" /> A1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_139.png" /> A10<br />\
    <img src="styles/legend/LokalplanHvidovre_1_140.png" /> A11<br />\
    <img src="styles/legend/LokalplanHvidovre_1_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/LokalplanHvidovre_1_143.png" /> A13<br />\
    <img src="styles/legend/LokalplanHvidovre_1_144.png" /> A14<br />\
    <img src="styles/legend/LokalplanHvidovre_1_145.png" /> A15<br />\
    <img src="styles/legend/LokalplanHvidovre_1_146.png" /> A3<br />\
    <img src="styles/legend/LokalplanHvidovre_1_147.png" /> A5<br />\
    <img src="styles/legend/LokalplanHvidovre_1_148.png" /> A7<br />\
    <img src="styles/legend/LokalplanHvidovre_1_149.png" /> A8<br />\
    <img src="styles/legend/LokalplanHvidovre_1_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_151.png" /> B17<br />\
    <img src="styles/legend/LokalplanHvidovre_1_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/LokalplanHvidovre_1_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/LokalplanHvidovre_1_155.png" /> H10<br />\
    <img src="styles/legend/LokalplanHvidovre_1_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_157.png" /> H11<br />\
    <img src="styles/legend/LokalplanHvidovre_1_158.png" /> H12<br />\
    <img src="styles/legend/LokalplanHvidovre_1_159.png" /> H13<br />\
    <img src="styles/legend/LokalplanHvidovre_1_160.png" /> H14<br />\
    <img src="styles/legend/LokalplanHvidovre_1_161.png" /> H15<br />\
    <img src="styles/legend/LokalplanHvidovre_1_162.png" /> H16<br />\
    <img src="styles/legend/LokalplanHvidovre_1_163.png" /> H17<br />\
    <img src="styles/legend/LokalplanHvidovre_1_164.png" /> H18<br />\
    <img src="styles/legend/LokalplanHvidovre_1_165.png" /> H20<br />\
    <img src="styles/legend/LokalplanHvidovre_1_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_167.png" /> H3<br />\
    <img src="styles/legend/LokalplanHvidovre_1_168.png" /> H4<br />\
    <img src="styles/legend/LokalplanHvidovre_1_169.png" /> H5<br />\
    <img src="styles/legend/LokalplanHvidovre_1_170.png" /> H9<br />\
    <img src="styles/legend/LokalplanHvidovre_1_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/LokalplanHvidovre_1_172.png" /> <br />' });
var format_Lokalplanforslag_2 = new ol.format.GeoJSON();
var features_Lokalplanforslag_2 = format_Lokalplanforslag_2.readFeatures(json_Lokalplanforslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforslag_2.addFeatures(features_Lokalplanforslag_2);
var lyr_Lokalplanforslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforslag_2, 
                style: style_Lokalplanforslag_2,
                popuplayertitle: 'Lokalplan forslag',
                interactive: true,
    title: 'Lokalplan forslag<br />\
    <img src="styles/legend/Lokalplanforslag_2_0.png" /> Boligområde ved Planteheldvej og Femagervej<br />\
    <img src="styles/legend/Lokalplanforslag_2_1.png" /> for blandet byområde ved Svend Aagesens Alle 10<br />\
    <img src="styles/legend/Lokalplanforslag_2_2.png" /> for sportshal ved Risbjergskolen<br />\
    <img src="styles/legend/Lokalplanforslag_2_3.png" /> <br />' });
var format_Frededeomrder_3 = new ol.format.GeoJSON();
var features_Frededeomrder_3 = format_Frededeomrder_3.readFeatures(json_Frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_3.addFeatures(features_Frededeomrder_3);
var lyr_Frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_3, 
                style: style_Frededeomrder_3,
                popuplayertitle: 'Fredede områder',
                interactive: false,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_3_5.png" /> <br />' });
var format_kommuneplan_4 = new ol.format.GeoJSON();
var features_kommuneplan_4 = format_kommuneplan_4.readFeatures(json_kommuneplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_4.addFeatures(features_kommuneplan_4);
var lyr_kommuneplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_4, 
                style: style_kommuneplan_4,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_4.png" /> kommuneplan'
            });
var format_Sportsfaciliteter2_5 = new ol.format.GeoJSON();
var features_Sportsfaciliteter2_5 = format_Sportsfaciliteter2_5.readFeatures(json_Sportsfaciliteter2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter2_5.addFeatures(features_Sportsfaciliteter2_5);
var lyr_Sportsfaciliteter2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter2_5, 
                style: style_Sportsfaciliteter2_5,
                popuplayertitle: 'Sports faciliteter 2',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter2_5.png" /> Sports faciliteter 2'
            });
var format_Sportsfaciliteter_6 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_6 = format_Sportsfaciliteter_6.readFeatures(json_Sportsfaciliteter_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_6.addFeatures(features_Sportsfaciliteter_6);
var lyr_Sportsfaciliteter_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_6, 
                style: style_Sportsfaciliteter_6,
                popuplayertitle: 'Sports faciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_6.png" /> Sports faciliteter'
            });
var format_Lystbdehavn_7 = new ol.format.GeoJSON();
var features_Lystbdehavn_7 = format_Lystbdehavn_7.readFeatures(json_Lystbdehavn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lystbdehavn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lystbdehavn_7.addFeatures(features_Lystbdehavn_7);
var lyr_Lystbdehavn_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lystbdehavn_7, 
                style: style_Lystbdehavn_7,
                popuplayertitle: 'Lystbådehavn',
                interactive: true,
                title: '<img src="styles/legend/Lystbdehavn_7.png" /> Lystbådehavn'
            });
var format_HvidovreHospital_8 = new ol.format.GeoJSON();
var features_HvidovreHospital_8 = format_HvidovreHospital_8.readFeatures(json_HvidovreHospital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreHospital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreHospital_8.addFeatures(features_HvidovreHospital_8);
var lyr_HvidovreHospital_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreHospital_8, 
                style: style_HvidovreHospital_8,
                popuplayertitle: 'Hvidovre Hospital',
                interactive: true,
                title: '<img src="styles/legend/HvidovreHospital_8.png" /> Hvidovre Hospital'
            });
var format_Kirker_9 = new ol.format.GeoJSON();
var features_Kirker_9 = format_Kirker_9.readFeatures(json_Kirker_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_9.addFeatures(features_Kirker_9);
var lyr_Kirker_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_9, 
                style: style_Kirker_9,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_9.png" /> Kirker'
            });
var format_Ladestationer_10 = new ol.format.GeoJSON();
var features_Ladestationer_10 = format_Ladestationer_10.readFeatures(json_Ladestationer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladestationer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladestationer_10.addFeatures(features_Ladestationer_10);
var lyr_Ladestationer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladestationer_10, 
                style: style_Ladestationer_10,
                popuplayertitle: 'Ladestationer',
                interactive: true,
                title: '<img src="styles/legend/Ladestationer_10.png" /> Ladestationer'
            });
var format_Mosque_11 = new ol.format.GeoJSON();
var features_Mosque_11 = format_Mosque_11.readFeatures(json_Mosque_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_11.addFeatures(features_Mosque_11);
var lyr_Mosque_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_11, 
                style: style_Mosque_11,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_11.png" /> Mosque'
            });
var format_Lgehuse_12 = new ol.format.GeoJSON();
var features_Lgehuse_12 = format_Lgehuse_12.readFeatures(json_Lgehuse_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehuse_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehuse_12.addFeatures(features_Lgehuse_12);
var lyr_Lgehuse_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehuse_12, 
                style: style_Lgehuse_12,
                popuplayertitle: 'Lægehuse',
                interactive: true,
                title: '<img src="styles/legend/Lgehuse_12.png" /> Lægehuse'
            });
var format_OffentligtWC_13 = new ol.format.GeoJSON();
var features_OffentligtWC_13 = format_OffentligtWC_13.readFeatures(json_OffentligtWC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffentligtWC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffentligtWC_13.addFeatures(features_OffentligtWC_13);
var lyr_OffentligtWC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OffentligtWC_13, 
                style: style_OffentligtWC_13,
                popuplayertitle: 'Offentligt WC',
                interactive: true,
                title: '<img src="styles/legend/OffentligtWC_13.png" /> Offentligt WC'
            });
var format_365Discount_14 = new ol.format.GeoJSON();
var features_365Discount_14 = format_365Discount_14.readFeatures(json_365Discount_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_365Discount_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_365Discount_14.addFeatures(features_365Discount_14);
var lyr_365Discount_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_365Discount_14, 
                style: style_365Discount_14,
                popuplayertitle: '365Discount',
                interactive: true,
                title: '<img src="styles/legend/365Discount_14.png" /> 365Discount'
            });
var format_Ftex_15 = new ol.format.GeoJSON();
var features_Ftex_15 = format_Ftex_15.readFeatures(json_Ftex_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ftex_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ftex_15.addFeatures(features_Ftex_15);
var lyr_Ftex_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ftex_15, 
                style: style_Ftex_15,
                popuplayertitle: 'Føtex',
                interactive: true,
                title: '<img src="styles/legend/Ftex_15.png" /> Føtex'
            });
var format_Kvickly_16 = new ol.format.GeoJSON();
var features_Kvickly_16 = format_Kvickly_16.readFeatures(json_Kvickly_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kvickly_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kvickly_16.addFeatures(features_Kvickly_16);
var lyr_Kvickly_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kvickly_16, 
                style: style_Kvickly_16,
                popuplayertitle: 'Kvickly',
                interactive: true,
                title: '<img src="styles/legend/Kvickly_16.png" /> Kvickly'
            });
var format_Lidl_17 = new ol.format.GeoJSON();
var features_Lidl_17 = format_Lidl_17.readFeatures(json_Lidl_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lidl_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lidl_17.addFeatures(features_Lidl_17);
var lyr_Lidl_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lidl_17, 
                style: style_Lidl_17,
                popuplayertitle: 'Lidl',
                interactive: true,
                title: '<img src="styles/legend/Lidl_17.png" /> Lidl'
            });
var format_Netto_18 = new ol.format.GeoJSON();
var features_Netto_18 = format_Netto_18.readFeatures(json_Netto_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Netto_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netto_18.addFeatures(features_Netto_18);
var lyr_Netto_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Netto_18, 
                style: style_Netto_18,
                popuplayertitle: 'Netto',
                interactive: true,
                title: '<img src="styles/legend/Netto_18.png" /> Netto'
            });
var format_Togstationer_19 = new ol.format.GeoJSON();
var features_Togstationer_19 = format_Togstationer_19.readFeatures(json_Togstationer_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_19.addFeatures(features_Togstationer_19);
var lyr_Togstationer_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_19, 
                style: style_Togstationer_19,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_19.png" /> Togstationer'
            });
var format_Folkeskoler_20 = new ol.format.GeoJSON();
var features_Folkeskoler_20 = format_Folkeskoler_20.readFeatures(json_Folkeskoler_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_20.addFeatures(features_Folkeskoler_20);
var lyr_Folkeskoler_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_20, 
                style: style_Folkeskoler_20,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_20.png" /> Folkeskoler'
            });
var format_Brnehaver_21 = new ol.format.GeoJSON();
var features_Brnehaver_21 = format_Brnehaver_21.readFeatures(json_Brnehaver_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_21.addFeatures(features_Brnehaver_21);
var lyr_Brnehaver_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_21, 
                style: style_Brnehaver_21,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_21.png" /> Børnehaver'
            });
var format_Legepladser_22 = new ol.format.GeoJSON();
var features_Legepladser_22 = format_Legepladser_22.readFeatures(json_Legepladser_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legepladser_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legepladser_22.addFeatures(features_Legepladser_22);
var lyr_Legepladser_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legepladser_22, 
                style: style_Legepladser_22,
                popuplayertitle: 'Legepladser',
                interactive: true,
                title: '<img src="styles/legend/Legepladser_22.png" /> Legepladser'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_LokalplanHvidovre_1.setVisible(true);lyr_Lokalplanforslag_2.setVisible(true);lyr_Frededeomrder_3.setVisible(true);lyr_kommuneplan_4.setVisible(true);lyr_Sportsfaciliteter2_5.setVisible(true);lyr_Sportsfaciliteter_6.setVisible(true);lyr_Lystbdehavn_7.setVisible(true);lyr_HvidovreHospital_8.setVisible(true);lyr_Kirker_9.setVisible(true);lyr_Ladestationer_10.setVisible(true);lyr_Mosque_11.setVisible(true);lyr_Lgehuse_12.setVisible(true);lyr_OffentligtWC_13.setVisible(true);lyr_365Discount_14.setVisible(true);lyr_Ftex_15.setVisible(true);lyr_Kvickly_16.setVisible(true);lyr_Lidl_17.setVisible(true);lyr_Netto_18.setVisible(true);lyr_Togstationer_19.setVisible(true);lyr_Folkeskoler_20.setVisible(true);lyr_Brnehaver_21.setVisible(true);lyr_Legepladser_22.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_LokalplanHvidovre_1,lyr_Lokalplanforslag_2,lyr_Frededeomrder_3,lyr_kommuneplan_4,lyr_Sportsfaciliteter2_5,lyr_Sportsfaciliteter_6,lyr_Lystbdehavn_7,lyr_HvidovreHospital_8,lyr_Kirker_9,lyr_Ladestationer_10,lyr_Mosque_11,lyr_Lgehuse_12,lyr_OffentligtWC_13,lyr_365Discount_14,lyr_Ftex_15,lyr_Kvickly_16,lyr_Lidl_17,lyr_Netto_18,lyr_Togstationer_19,lyr_Folkeskoler_20,lyr_Brnehaver_21,lyr_Legepladser_22];
lyr_LokalplanHvidovre_1.set('fieldAliases', {'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanforslag_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Frededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_kommuneplan_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Sportsfaciliteter2_5.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Website': 'Website', });
lyr_Lystbdehavn_7.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreHospital_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_9.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Ladestationer_10.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Leverandø': 'Leverandø', 'Lukketid': 'Lukketid', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mosque_11.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lgehuse_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OffentligtWC_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_365Discount_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ftex_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kvickly_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lidl_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Netto_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_20.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehaver_21.set('fieldAliases', {'fid': 'fid', 'Instutionn': 'Instutionn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Legepladser_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LokalplanHvidovre_1.set('fieldImages', {'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanforslag_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Frededeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_kommuneplan_4.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Sportsfaciliteter2_5.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Sportsfaciliteter_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Website': 'TextEdit', });
lyr_Lystbdehavn_7.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_HvidovreHospital_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kirker_9.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Ladestationer_10.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Leverandø': 'TextEdit', 'Lukketid': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Mosque_11.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Lgehuse_12.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OffentligtWC_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_365Discount_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ftex_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kvickly_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lidl_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Netto_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_19.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskoler_20.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Brnehaver_21.set('fieldImages', {'fid': 'TextEdit', 'Instutionn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Legepladser_22.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LokalplanHvidovre_1.set('fieldLabels', {'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Lokalplanforslag_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Frededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_kommuneplan_4.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Sportsfaciliteter2_5.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Sportsfaciliteter_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'Website': 'no label', });
lyr_Lystbdehavn_7.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_HvidovreHospital_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Kirker_9.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Ladestationer_10.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Leverandø': 'no label', 'Lukketid': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Mosque_11.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Lgehuse_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OffentligtWC_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_365Discount_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ftex_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Kvickly_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lidl_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Netto_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Togstationer_19.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Folkeskoler_20.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Brnehaver_21.set('fieldLabels', {'fid': 'no label', 'Instutionn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_Legepladser_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Legepladser_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});