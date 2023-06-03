<script lang="ts">
    import { Router, Route, navigate } from 'svelte-navigator'

    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'
    import Register from './pages/Register.svelte'
    import Login from './pages/Login.svelte'
    import Profile from './pages/Profile.svelte'
    import Passengers from './pages/Passengers.svelte'
    import Drivers from './pages/Drivers.svelte'
    import NotFound from './pages/NotFound.svelte'

</script>

<Router>
    <Route path="/" component={Home}/>
    <Route path="/drivers" component={Drivers}/>
    <Route path="/passengers" component={Passengers}/>
    <Route path="/about" component={About}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="*" component={NotFound}/>
</Router>   