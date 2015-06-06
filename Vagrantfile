Vagrant.configure(2) do |config|
	config.vm.box = "ubuntu/trusty64"
	config.vm.hostname = "payload"
	config.vm.provider "virtualbox" do |v|
		v.memory = 1024
	end
	config.vm.network :forwarded_port, guest: 3449, host: 3449
	dotfiles = %w{  gitconfig gitignore
					profile login logout
					bashrc bash_profile bash_aliases
					zshrc zprofile vimrc scmbrc }

	dotfiles.each do |dotfile|
		dotfile_full = File.expand_path("~/.#{dotfile}")
		if File.exists?(dotfile_full)
			config.vm.provision "file", source: dotfile_full, destination: "/home/vagrant/.#{dotfile}"
		end
	end

	syncdirs = %w{ .aws .vim .oh-my-zsh .scm-breeze binß }
	syncdirs.each do |syncdir|
		syncdir_full = File.expand_path("~/#{syncdir}")
		if File.directory?(syncdir_full)
		  config.vm.synced_folder syncdir_full, "/home/vagrant/#{syncdir}"
		end
	end
	config.vm.provision :shell, inline: "apt-get -y install python-setuptools awscli"
	config.vm.provision :shell, privileged: false, path: "scripts/vagrant-bootstrap.sh"
	config.vm.synced_folder "../payload", "/vagrant/"
end
