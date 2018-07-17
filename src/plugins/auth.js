/* eslint-disable */
import store from '@/store';
import { http } from '@/plugins';
import { array_get } from '@/utilities';

const auth = {
  async login(credentials) {
    const response = await http.post('api/auth/login', credentials);
    localStorage.setItem('access_token', response.data.access_token);
    this.initialize();
    store.dispatch('auth/login', response.data.user);
    store.dispatch('auth/ready');
  },
  async hello() {
    this.initialize();
    const response = await http.get('api/hello');
    store.dispatch('auth/login', response.data.user);
    store.dispatch('auth/ready');
  },
  logout() {
    localStorage.removeItem('access_token');
    store.dispatch('auth/logout');
    // window.location.reload();
  },
  initialize() {
    http.defaults.headers.common['Authorization'] = `Bearer ${auth.token()}`;
    http.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        console.log(error);
        console.log('Auth err');
        if (error.response.status === 401) {
          this.logout();
        }
        if (error.response.status === 500) {
          console.log(response.data);
        }
        return Promise.reject(error);
      }
    );
  },
  isAuthenticated() {
    return this.get('authenticated');
  },
  isReady() {
    return this.get('ready');
  },
  token() {
    return localStorage.getItem('access_token');
  },
  get(key) {
    return array_get(store.state.auth, key);
  },
  context() {
    return this.get('user.role') === 'admin'
      ? 'manager'
      : this.get('user.role');
  },
  user() {
    return store.state.auth.user;
  },
};

export function install(Vue) {
  Vue.prototype.$auth = auth;
}

export default auth;
