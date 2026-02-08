self.__uv$config = {
    prefix: '/s/', // This matches your '/s/internet/' scope
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv-sw.js', // Move this file to your main directory!
};
