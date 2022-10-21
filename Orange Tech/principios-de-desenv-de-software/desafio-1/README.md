#### Listando arquivos ocultos no bash

```terminal
ls -a
```

#### Criando par de chaves git (SSH) gitDash

```terminal (gitbash)
ssh-keygen -t ed25519 -C <email cadastrado no github>
```

#### Iniciando o ssh agent

```terminal (gitbash)
eval $(ssh-agent -s)
ssh-add <id da chave privada>
```

#### Iniciando o git

```terminal
  git init
```

#### Configurando o usuario global para interagir com o repositorio

```terminal
  git config --global user.email "<email>"
  git config --global user.name "<name>"
```

#### Verificando as informações armazenadas pelo git localmente

```terminal
git config --list
```

#### Excluindo propriedade configuracao no git local

```terminal
git config --global --unset <propriedade listada no comando acima>
```

#### Iniciando o versionamento no git - move o arquivo para stage

```terminal
  git add <nome arquivo ou * ou .>
```

#### Checkando a situação do arquivo(untrack, unchanged, modified, stage, commit)

```terminal
  git status
```

#### Criando um commit (repositorio local (computador de trabalho) e repositorio remoto (servidor do github))

```terminal
  git commit -m "<mensagem de commit>"
```

#### Adicionando o local do repositorio remoto

```terminal
git remote add <apelido/alias por convensao é usado origin> <endereco do repositorio remoto (link)>
```

#### Lista de repositorios remotos cadastrados

```terminal
git remote -v
```

#### Enviando repositorio local para repositorio remoto

```terminal
git push <repositorio remoto> <repositorio local>
```

#### Quando em conflito ou para atualizar o repositorio local

```terminal
git pull <repositorio remoto> <repositorio local>
```

#### Baixando / clonando repositorio do github

```terminal
git clone <url do github>
```
