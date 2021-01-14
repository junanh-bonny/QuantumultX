const headers = $request.headers;

// darkroom
if (headers["User-Agent"].indexOf("Darkroom") != -1) {
  $persistentStore.write("true", "drkrm");
} else {
  $persistentStore.write("false", "drkrm");
}

// live wallpaper
if (headers["User-Agent"].indexOf("WallpaperApp") != -1) {
  $persistentStore.write("true", "lvwllpp");
} else {
  $persistentStore.write("false", "lvwllpp");
}

// paper
if (headers["User-Agent"].indexOf("Paper") != -1) {
  $persistentStore.write("true", "ppr");
} else {
  $persistentStore.write("false", "ppr");
}

// fonos
if (headers["User-Agent"].indexOf("Fonos") != -1) {
  $persistentStore.write("true", "fono");
} else {
  $persistentStore.write("false", "fono");
}

// pigment
if (headers["User-Agent"].indexOf("Pigment") != -1) {
  $persistentStore.write("true", "pigment");
} else {
  $persistentStore.write("false", "pigment");
}

// atlas english
if (headers["User-Agent"].indexOf("byroon") != -1) {
  $persistentStore.write("true", "atlaseng");
} else {
  $persistentStore.write("false", "atlaseng");
}

// tone perfect pitch
if (headers["User-Agent"].indexOf("Perfect%20Pitch") != -1) {
  $persistentStore.write("true", "tone");
} else {
  $persistentStore.write("false", "tone");
}

// logo shop
if (headers["User-Agent"].indexOf("Logo%20Maker") != -1) {
  $persistentStore.write("true", "logomaker");
} else {
  $persistentStore.write("false", "logomaker");
}

// weatherkit
if (headers["User-Agent"].indexOf("WeatherKit") != -1) {
  $persistentStore.write("true", "weatherkit");
} else {
  $persistentStore.write("false", "weatherkit");
}

// zero for gmail
if (headers["User-Agent"].indexOf("Zero%20for%20Gmail") != -1) {
  $persistentStore.write("true", "zero");
} else {
  $persistentStore.write("false", "zero");
}

// BUNPOU
if (headers["User-Agent"].indexOf("BUNPOU") != -1) {
  $persistentStore.write("true", "bunpou");
} else {
  $persistentStore.write("false", "bunpou");
}

// weatherline
if (headers["User-Agent"].indexOf("Weather%20Line") != -1) {
  $persistentStore.write("true", "weatherline");
} else {
  $persistentStore.write("false", "weatherline");
}

// 1blocker
if (headers["User-Agent"].indexOf("1Blocker") != -1) {
  $persistentStore.write("true", "1blocker");
} else {
  $persistentStore.write("false", "1blocker");
}

// noto
if (headers["User-Agent"].indexOf("Noto") != -1) {
  $persistentStore.write("true", "noto");
} else {
  $persistentStore.write("false", "noto");
}

// pillow
if (headers["User-Agent"].indexOf("Pillow") != -1) {
  $persistentStore.write("true", "pillow");
} else {
  $persistentStore.write("false", "pillow");
}

// airmail
if (headers["User-Agent"].indexOf("Airmail") != -1) {
  $persistentStore.write("true", "airmail");
} else {
  $persistentStore.write("false", "airmail");
}

// strucc
if (headers["User-Agent"].indexOf("Strucc") != -1) {
  $persistentStore.write("true", "strucc");
} else {
  $persistentStore.write("false", "strucc");
}
$done({headers});
