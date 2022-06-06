# Wakeflow dotfiles

Get your machine purring with this selection of dotfiles.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/andreas-kater/dotfiles. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## Installation

1. Install zsh:
   - MacOs/Linux: `brew install zsh`
   - Windows: `apt install zsh`

2. Set up symlinks in your home directory to the following files (this assumes you cloned the dotfiles repo into the ~/dotfiles folder): 
   - `ln -s ~/dotfiles/vimrc ~/.vimrc`
   - `ln -s ~/dotfiles/zshrc ~/.zshrc`
   - `ln -s ~/dotfiles/aliases ~/.aliases`
   - `ln -s ~/dotfiles/gitconfig ~/.gitconfig`
   - `ln -s ~/dotfiles/oh-my-zsh ~/.oh-my-zsh`
    
3. If you use VSCode, set up symlinks to the settings.json and keybindings.json files:
   - `ln -s ~/Dev/dotfiles/vscode/settings.json "~/Library/Application Support/Code/User/settings.json"`
   - `ln -s ~/Dev/dotfiles/vscode/keybindings.json "~/Library/Application Support/Code/User/keybindings.json"`

## License

The code is available as open source under the terms of the [MIT
License](http://opensource.org/licenses/MIT).

<br></br>
[![Wakeflow
logo](https://wakeflow.io/images/wakeflowlogo.png)](https://wakeflow.io)

This repository was created and is maintained by Wakeflow Ltd.

## Get in touch
If you like what you see and would like to hire us or join us, [get in
touch](https://wakeflow.io/jobs)!
