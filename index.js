import MITMProxy from 'mitmproxy';

async function main() {
  const interceptPaths = [
    '/eval'
  ]
  const mitmProxy = await MITMProxy.default.Create(undefined, interceptPaths, false);
}

main();