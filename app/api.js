const base='https://make.fun/api';export const etagCache=new Map();const pending=new Map();
export async function get(path){const key=base+path;if(pending.has(key))return pending.get(key);const request=(async()=>{let old=etagCache.get(key);try{old ||= JSON.parse(localStorage.getItem('mf:'+key)||'null')}catch{}const r=await fetch(key,{headers:old?.etag?{'If-None-Match':old.etag}:{}});if(r.status===304&&old){etagCache.set(key,old);return old.data}if(!r.ok)throw new Error(`API request failed (${r.status})`);let data=await r.json();if(data.submissions){const {submissions,...detail}=data;data=detail}const record={etag:r.headers.get('etag'),data};etagCache.set(key,record);try{localStorage.setItem('mf:'+key,JSON.stringify(record))}catch{}return data})();pending.set(key,request);try{return await request}finally{pending.delete(key)}}
export const fetchCompetitions=()=>get('/competitions?status=open&limit=50');
export const fetchBounty=s=>get('/competitions/'+encodeURIComponent(s));
export const fetchBoardDetail=fetchBounty;
export const fetchLeaderboard=(s,view)=>get('/competitions/'+encodeURIComponent(s)+'/leaderboard?rows=first'+(view?'&view='+encodeURIComponent(view):''));
export const fetchProfile=h=>get('/profiles/'+encodeURIComponent(h));
