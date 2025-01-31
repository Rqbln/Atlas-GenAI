import { readFileSync, writeFileSync } from 'node:fs';

const main = () => {
  let urls = readFileSync('./stages-urls.json', 'utf8');

  try {
    urls = JSON.parse(urls);
  } catch (e) {
    console.error('malformed file: stages-urls.json');
    return;
  }
  const out = urls[process.env.STAGE];
  if (!out) {
    console.error('stage not found');
    return;
  }
  writeFileSync('../src/utils/ApiURL.json', JSON.stringify(out, null, 2));
};

main();
