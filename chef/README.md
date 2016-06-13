# Build My Day cookbook

This cookbook install every system dependencies that the app might require.

## Supported Platforms

It is currently tested with debian/jessie.

## Attributes

<table>
  <tr>
    <th>Key</th>
    <th>Type</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><tt>['chef']['bacon']</tt></td>
    <td>Boolean</td>
    <td>whether to include bacon</td>
    <td><tt>true</tt></td>
  </tr>
</table>

## Usage

### Locally

Install docker and virtualbox : 

```
brew cask install virtualbox
brew install docker docker-machine
```

Create a docker-machine for the project : 

```
docker-machine create -d virtualbox build-my-day
```

From here now on you can start / stop the machine when needed with 

```
docker-machine start/stop build-my-day
```

When it's done, in your terminal setup the correct environment by doing :

```
eval $(docker-machine env build-my-day)
```

Finally you can do `kitchen verify` to test that the cookbook is working.


### chef::default

Include `chef` in your node's `run_list`:

```json
{
  "run_list": [
    "recipe[chef::default]"
  ]
}
```

## License and Authors

Author:: Michaël Journo (gobadiah@gmail.com)
