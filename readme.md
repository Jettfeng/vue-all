<h3>4-8：Vuex之模块</h3   
<p>vuex热更替</p>
<p> if (module.hot) {</p>
<p>module.hot.accept([</p>
<p>'./state/state',</p>
<p> './mutations/mutations',</p>
<p> './actions/actions',</p>
<p>'./getters/getters'</p>
<p> ], () => {</p>
<p> const newState = require('./state/state').default</p>
<p>const newMutations = require('./mutations/mutations').default</p>
<p>const newActions = require('./actions/actions').default</p>
<p> const newGetters = require('./getters/getters').default</p>
<p>store.hotUpdate({</p>
<p>state: newState,</p>
<p>mutations: newMutations,</p>
<p>getters: newGetters,</p>
<p>actions: newActions</p>
<p>})</p>
<p>})</p>
<p>}</p>
<p>return store</p>
  
        
          
         
         
          
       
         
          
          
         
    
          
            
            
            
            
  
      
      
        
        
   
   
       
        
    

