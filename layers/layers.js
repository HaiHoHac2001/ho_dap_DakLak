ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([106.266272, 11.682666, 110.175321, 13.652904]);
var wms_layers = [];

var format_gadm36_VNM_2_0 = new ol.format.GeoJSON();
var features_gadm36_VNM_2_0 = format_gadm36_VNM_2_0.readFeatures(json_gadm36_VNM_2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm36_VNM_2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_VNM_2_0.addFeatures(features_gadm36_VNM_2_0);
var lyr_gadm36_VNM_2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_VNM_2_0, 
                style: style_gadm36_VNM_2_0,
                interactive: true,
                title: '<img src="styles/legend/gadm36_VNM_2_0.png" /> gadm36_VNM_2'
            });
var format_songHo_DakLak_1 = new ol.format.GeoJSON();
var features_songHo_DakLak_1 = format_songHo_DakLak_1.readFeatures(json_songHo_DakLak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_songHo_DakLak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_songHo_DakLak_1.addFeatures(features_songHo_DakLak_1);
var lyr_songHo_DakLak_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_songHo_DakLak_1, 
                style: style_songHo_DakLak_1,
                interactive: true,
                title: '<img src="styles/legend/songHo_DakLak_1.png" /> songHo_DakLak'
            });

lyr_gadm36_VNM_2_0.setVisible(true);lyr_songHo_DakLak_1.setVisible(true);
var layersList = [lyr_gadm36_VNM_2_0,lyr_songHo_DakLak_1];
lyr_gadm36_VNM_2_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_songHo_DakLak_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_gadm36_VNM_2_0.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_songHo_DakLak_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_gadm36_VNM_2_0.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'inline label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_songHo_DakLak_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label', });
lyr_songHo_DakLak_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});