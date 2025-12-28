import fs from 'fs';
import { locate } from '@iconify/json';

import { getCleanIconBody } from '@/lib/utils';
import { AVAILABLE_ICON_SETS } from '@/lib/constants';

interface OptimizedIcon {
  name: string;
  set: string;
  body: string; // svg path
}

const allIcons: OptimizedIcon[] = [];

AVAILABLE_ICON_SETS.forEach((collectionName) => {
  const filename = locate(collectionName);
  const data = JSON.parse(fs.readFileSync(filename, 'utf8'));

  Object.keys(data.icons).forEach((iconName) => {
    allIcons.push({
      name: iconName,
      set: collectionName,
      body: getCleanIconBody(data.icons[iconName].body),
    });
  });
});

fs.writeFileSync('./public/icons-db.json', JSON.stringify(allIcons));
console.log(`Generated icons-db.json with ${allIcons.length} icons.`);
