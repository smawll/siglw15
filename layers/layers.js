var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_3kecamatan_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "3 kecamatan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3kecamatan_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12550555.894190, -815534.555831, 12558883.468772, -807303.356692]
                            })
                        });
var format_tirik_2 = new ol.format.GeoJSON();
var features_tirik_2 = format_tirik_2.readFeatures(json_tirik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tirik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tirik_2.addFeatures(features_tirik_2);
var lyr_tirik_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tirik_2, 
                style: style_tirik_2,
                interactive: true,
    title: 'tirik<br />\
    <img src="styles/legend/tirik_2_0.png" /> <br />\
    <img src="styles/legend/tirik_2_1.png" /> 1<br />\
    <img src="styles/legend/tirik_2_2.png" /> 2<br />'
        });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });
var format_sungaikecil_4 = new ol.format.GeoJSON();
var features_sungaikecil_4 = format_sungaikecil_4.readFeatures(json_sungaikecil_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaikecil_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaikecil_4.addFeatures(features_sungaikecil_4);
var lyr_sungaikecil_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungaikecil_4, 
                style: style_sungaikecil_4,
                interactive: true,
                title: '<img src="styles/legend/sungaikecil_4.png" /> sungai kecil'
            });
var format_sungaibesar1_5 = new ol.format.GeoJSON();
var features_sungaibesar1_5 = format_sungaibesar1_5.readFeatures(json_sungaibesar1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaibesar1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaibesar1_5.addFeatures(features_sungaibesar1_5);
var lyr_sungaibesar1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungaibesar1_5, 
                style: style_sungaibesar1_5,
                interactive: true,
                title: '<img src="styles/legend/sungaibesar1_5.png" /> sungai besar1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_3kecamatan_1.setVisible(true);lyr_tirik_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_sungaikecil_4.setVisible(true);lyr_sungaibesar1_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_3kecamatan_1,lyr_tirik_2,lyr_jalan_3,lyr_sungaikecil_4,lyr_sungaibesar1_5];
lyr_tirik_2.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_jalan_3.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungaikecil_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungaibesar1_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_tirik_2.set('fieldImages', {'id': 'TextEdit', 'luas_ha': '', });
lyr_jalan_3.set('fieldImages', {'REMARK': '', 'LCODE': '', 'SHAPE_Leng': '', });
lyr_sungaikecil_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_sungaibesar1_5.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_tirik_2.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_jalan_3.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungaikecil_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungaibesar1_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungaibesar1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});