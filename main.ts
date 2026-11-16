import {cp,mkdir,writeFile} from 'node:fs/promises';import {buildDossier} from './vendor/makefun-frontend.ts';
const out=process.env.MAKEFUN_OUTPUT_DIR||'/output';await mkdir(out,{recursive:true});await cp('app',out+'/app',{recursive:true});await cp('screenshots',out+'/screenshots',{recursive:true});await writeFile(out+'/dossier.json',buildDossier(out,{text_max_bytes:163840}));
