
# oh-my-zsh
export ZSH=$HOME/.oh-my-zsh
export PS1=">> "

plugins=(git)

source $ZSH/oh-my-zsh.sh

# aliases
[[ -f ~/.aliases ]] && source ~/.aliases


#nvm node version manager
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

# vim
export EDITOR='vim'

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/andreaskater/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/andreaskater/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/andreaskater/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/andreaskater/google-cloud-sdk/completion.zsh.inc'; fi

autoload -U +X bashcompinit && bashcompinit
complete -o nospace -C /usr/local/bin/terraform terraform

export PATH=$HOME/bin:$PATH
export PATH="$HOME/.bin:$PATH"
export PATH="$HOME:$PATH"
export PATH="$PATH:/usr/local/bin"
export PATH="/usr/local/opt/curl/bin:$PATH"

#brew
eval "$(/opt/homebrew/bin/brew shellenv)"
