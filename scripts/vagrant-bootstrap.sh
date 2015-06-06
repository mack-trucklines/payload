#!/bin/bash -e

# Install Java
sudo apt-get install -y --force-yes oracle-java8-*
sudo update-alternatives --set java /usr/lib/jvm/java-8-oracle/jre/bin/java

# Build Project
cd /vagrant
lein
