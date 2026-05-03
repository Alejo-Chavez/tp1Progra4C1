@if (repos) {

<div class="group p-6 bg-[#161B22] border border-[#30363d] rounded-xl 
            hover:border-slate-500 transition-all duration-200 
            flex flex-col justify-between h-full">

  <!-- HEADER -->
    <div>
      <div class="flex justify-between items-start mb-2">

        <!-- Nombre -->
          <div class="flex items-center gap-2">
            <span class="text-slate-400">
              <!-- icono -->
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Z" />
                </svg>
            </span>

            <a [href]="repos.html_url" target="_blank" class="text-[#2F81F7] font-semibold hover:underline">
              {{ repos.name }}
            </a>
          </div>

          <!-- Badge -->
          <span class="px-2 py-0.5 rounded-full border border-[#30363d] 
                   text-xs text-slate-400">
            Public
          </span>
      </div>

      <!-- DESCRIPTION -->
        <p class="text-sm text-slate-400 mb-6 line-clamp-2">
          {{ repos.description || 'No description' }}
        </p>
    </div>

    <!-- FOOTER -->
      <div class="flex items-center justify-between mt-auto pt-4">

        <div class="flex items-center gap-4">

          <!-- LENGUAJE -->
            <div class="flex items-center gap-2">
              <!--  HARDCODE (como pediste) -->
                <!-- <span class="w-3 h-3 rounded-full bg-[#dea584]"></span> -->

                  <!--  DINÁMICO -->
                    <span class="w-3 h-3 rounded-full" [style.backgroundColor]="repos.color"></span>

                    <span class="text-sm text-slate-400">
                      {{ repos.language || 'Unknown' }}
                    </span>
            </div>

            <!-- STARS -->
              <div class="flex items-center gap-1 text-slate-500">
               
                <span class="text-sm">{{ repos.stargazers_count }}</span>
              </div>

              <!-- FORKS -->
                <div class="flex items-center gap-1 text-slate-500">
                  
                  <span class="text-sm">{{ repos.forks_count }}</span>
                </div>

        </div>
      </div>
</div>
}

- - -
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!--IMPORTANTE, LOGICA QUE VA EN EL APP CARD CUANDO NO SE HARDCODEE MAS-->

  <!-- Repo 1 -->
  <div class="group p-6 bg-[#161B22] border border-[#30363d] rounded-xl 
              hover:border-slate-500 transition-all duration-200 
              flex flex-col justify-between h-full">

    <div>
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <span class="text-slate-400"><svg fill="#90a1b9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg></span>
          <a href="#" class="text-[#2F81F7] font-semibold hover:underline">
            quantum-engine
          </a>
        </div>
        <span class="px-2 py-0.5 rounded-full border border-[#30363d] text-xs text-slate-400">
          Public
        </span>
      </div>

      <p class="text-sm text-slate-400 mb-6 line-clamp-2">
        A high-performance physics engine written in Rust for real-time simulations.
      </p>
    </div>

    <div class="flex items-center justify-between mt-auto pt-4">
      <div class="flex items-center gap-4">

        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#dea584]"></span>
          <span class="text-sm text-slate-400">Rust</span>
        </div>

        <div class="flex items-center gap-1 text-slate-500">
           <span class="text-sm flex gap-1 items-center"><svg  fill="#90a1b9 "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>  1200</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Repo 2 -->
  <div class="group p-6 bg-[#161B22] border border-[#30363d] rounded-xl 
              hover:border-slate-500 transition-all duration-200 
              flex flex-col justify-between h-full">

    <div>
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <span class="text-slate-400"><svg fill="#90a1b9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg></span>
          <a href="#" class="text-[#2F81F7] font-semibold hover:underline">
            neural-viz
          </a>
        </div>
        <span class="px-2 py-0.5 rounded-full border border-[#30363d] text-xs text-slate-400">
          Public
        </span>
      </div>

      <p class="text-sm text-slate-400 mb-6 line-clamp-2">
        Interactive 3D visualization tool for neural networks.
      </p>
    </div>

    <div class="flex items-center justify-between mt-auto pt-4">
      <div class="flex items-center gap-4">

        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#3178c6]"></span>
          <span class="text-sm text-slate-400">TypeScript</span>
        </div>

        <div class="flex items-center gap-1 text-slate-500">
           <span class="text-sm flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="#90a1b9 " viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>842</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Repo 3 -->
  <div class="group p-6 bg-[#161B22] border border-[#30363d] rounded-xl 
              hover:border-slate-500 transition-all duration-200 
              flex flex-col justify-between h-full">

    <div>
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2     ">
          <span class="text-slate-400"><svg fill="#90a1b9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg></span>
          <a href="#" class="text-[#2F81F7] font-semibold hover:underline">
            api-gateway-light
          </a>
        </div>
        <span class="px-2 py-0.5 rounded-full border border-[#30363d] text-xs text-slate-400">
          Public
        </span>
      </div>

      <p class="text-sm text-slate-400 mb-6 line-clamp-2">
        Lightweight API gateway focused on performance and edge computing.
      </p>
    </div>

    <div class="flex items-center justify-between mt-auto pt-4">
      <div class="flex items-center gap-4">

        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#f1e05a]"></span>
          <span class="text-sm text-slate-400">JavaScript</span>
        </div>

        <div class="flex items-center gap-1 text-slate-500">
           <span class="text-sm flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="#90a1b9 "viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>195</span>
        </div>
      </div>
    </div>
  </div>

</div>