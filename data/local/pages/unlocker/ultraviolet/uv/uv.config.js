self.__uv$config = {
    prefix: '/s/',
    bare: 'https://bare.benroxy.com/bare/', // Backup Bare server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/data/local/pages/unlocker/ultraviolet/uv/uv.handler.js',
    bundle: '/data/local/pages/unlocker/ultraviolet/uv/uv.bundle.js',
    config: '/data/local/pages/unlocker/ultraviolet/uv/uv.config.js',
    sw: '/uv-sw.js',
    wisp: 'wss://wisp.mercurywork.shop/', 
};
