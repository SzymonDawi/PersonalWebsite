### Tech

- Python 3.11
- Wagtail 5.2
- Django 4.2
- Ariadne 0.21
- Graphql
- Ruff 0.1.7

### Setup

#### Linux

Install pyenv following the insturctions [here](https://gist.github.com/trongnghia203/9cc8157acb1a9faad2de95c3175aa875)

#### Install python 3.11

```shell 
pyenv isntall 3.11
```

##### 
<details>
<summary><i>Note if you get issues with some modules not being installed</i></summary>

tkinter
```shell
sudo apt-get install tk-dev
```

lzma
```shell
sudo apt-get install lzma
sudo apt-get install liblzma-dev
sudo apt-get install libbz2-dev
```

_ctypes
```shell
sudo apt-get install libffi-dev
```
</details>

#### Install pipx

```shell
sudo apt install pipx
pipx ensurepath
```

#### Install poetry

```shell
pipx install poetry
```

#### Install python packages

```shell
poetry install --no-root
```


### Development

#### Update migrations

```shell
poetry run python manage.py makemigrations
poetry run python manage.py migrate
```

```shell
poetry run python manage.py runserver
```