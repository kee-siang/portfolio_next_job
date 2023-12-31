import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

//function use to fetch data from the database through 'api/collections/jobs/records'//
export async function load({ fetch }) {
    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + 'api/collections/jobs/records?page=1&perPage=10');
    
    const res = await resp.json();
    if (resp.status == 200) {
      return {
        jobs: res
      }
    } else {
      return {
        jobs: []
      }
    }
  }