remplazar el section hardcodeado cuando se me vaya el rate limit
<section class="lg:hidden px-6 mb-8">
        @if (user()) {
        <div class="bg-[#161B22] border border-[#30363d] rounded-xl p-6">

            <!-- Perfil -->
            <div class="flex flex-col md:flex-row  items-center gap-4 mb-4">
                <div class="w-16 h-16 rounded-full overflow-hidden border border-[#30363d]">
                    <img [src]="user()?.avatar_url" alt="Avatar" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="text-slate-100 font-semibold">@{{user()?.login}}</h3>
                    <p class="text-slate-400 text-sm m-0.5">{{user()?.bio}}</p>
                </div>
            </div>

            <!-- Stats -->
            <div class="flex gap-4 mb-4">
                <div class="flex-1 bg-[#0D1117] border border-[#30363d] rounded-lg p-3 text-center">
                    <p class="text-slate-100 font-bold">{{user()?.public_repos}}</p>
                    <p class="text-slate-500 text-xs">Repos</p>
                </div>
                <div class="flex-1 bg-[#0D1117] border border-[#30363d] rounded-lg p-3 text-center">
                    <p class="text-slate-100 font-bold">{{user()?.followers }}</p>
                    <p class="text-slate-500 text-xs">Followers</p>
                </div>
            </div>

            <!-- Sobre mí -->
            <div>
                <h4 class="text-slate-400 text-xs uppercase mb-2">Sobre mí</h4>
                <p class="text-slate-400 text-sm leading-relaxed">
                    Apasionado por crear experiencias digitales eficientes y escalables.
                </p>
            </div>
        </div>
        }
    </section>