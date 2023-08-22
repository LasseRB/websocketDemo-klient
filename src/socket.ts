import {reactive} from 'vue';
import {io} from 'socket.io-client';
import {Kriger} from '../src/lib';

export const state = reactive({
    warriors: new Map<string, Kriger>(),
    kriger: new Kriger(),
    events: [],
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL = meta.env.VITE_NODE_ENV === "production" ? undefined : "http://localhost:3000/demo";
const URL = "http://localhost:1234/demo";
// const URL = 'https://websocketdemo-server-vsbsqqkdka-ey.a.run.app/demo';

export const socket = io(URL);

socket.on('connect', () => {
    state.kriger.id = socket.id;
    // vi sender det nye objekt, og venter på at få listen af alle krigere retur.
    emitWarrior(state.kriger);
});

socket.on('disconnect', (user) => {
    state.warriors.delete(socket.id);
});

socket.on('user_connected', (data) => {
    state.events.push('Ny kriger på vej med ID: ' + data);
});

socket.on('users', (data) => {
    const krigere = new Map<string, Kriger>(JSON.parse(data));
    state.warriors.clear();
    krigere.forEach((kriger) => state.warriors.set(kriger.id, kriger));
});

socket.on('user_disconnected', (user_input) => {
    console.log('user disconnected: ', user_input);
    state.warriors.delete(user_input);
});

socket.on('moveMouse', (data) => {
    const kriger = JSON.parse(data) as Kriger;
    if (kriger) {
        state.warriors.set(kriger.id, kriger);
    }
});

socket.on('user_slideChange', (data) => {
    const userSlideChange = JSON.parse(data);
    const kriger = state.warriors.get(userSlideChange?.id)
    console.log(userSlideChange)
    if(kriger && userSlideChange.slide) {
        kriger.slide = userSlideChange.slide
        state.warriors.set(kriger.id, kriger);
        console.log(kriger)
    }
});

export function emitMouseMove(mousePosition: any) {
    socket.emit('mouseMove', JSON.stringify({id: state.kriger.id, x: mousePosition.x, y: mousePosition.y}));
}

export function emitWarrior(kriger: Kriger) {
    socket.emit('new-warrior', JSON.stringify(kriger));
}

export function emitSlideNumber(slide: number) {
    console.log('SLIDECHANGE', JSON.stringify({id: state.kriger.id, slide}))
  socket.emit('slideChange', JSON.stringify({id: state.kriger.id, slide}));
}
