require 'chef/provisioning/docker_driver'

machine_image 'ssh_server' do
  recipe 'build-my-day'

  machine_options :docker_options => {
      :base_image => {
          :name => 'debian',
          :repository => 'debian',
          :tag => '8.4'
      }
  }
end

machine 'ssh00' do
  from_image 'ssh_server'

  machine_options :docker_options => {
      :command => 'echo Hello world',
  }
end
