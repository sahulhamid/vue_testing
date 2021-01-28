import {mapGetters, mapMutations} from 'vuex'
export default {
    name:'basic',
    computed:{
        ...mapGetters(['getTodos','getName']),
        name(){
            return this.getName
        }
    },
    methods:{
        ...mapMutations(['changeName']),
        changer(){
            this.changeName("new title")
               
        }
    },
    // mounted(){
    //     this.$store.commit('changeName','titleName is updating')    
    // }
}