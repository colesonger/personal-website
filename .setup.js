require("@babel/register")({
    ignore: [false]
});

require.extensions['.css'] = function() {
    return null;
}