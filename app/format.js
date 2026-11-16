export const money=v=>v==null?'—':`$${Number(v).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}`;
export const winRate=v=>v==null?'—':(Number(v)/10000).toFixed(2)+'%';
export const fileSize=v=>v==null?'—':Number(v)>=1048576?(v/1048576).toFixed(2)+' MB':(v/1024).toFixed(2)+' KB';
export const count=v=>Number(v||0).toLocaleString();
export function timeLeft(date){const d=new Date(date)-Date.now();if(!Number.isFinite(d))return '—';if(d<=0)return 'closed';const h=Math.floor(d/36e5),m=Math.floor(d%36e5/6e4);return h>48?`${Math.floor(h/24)}d ${h%24}h`:h?`${h}h ${m}m`:`${m}m`}
export function formatDeadline(value){const date=new Date(value);if(!value||!Number.isFinite(date.getTime()))return 'unavailable';return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Jakarta'}).format(date)+' WIB'}
