# crudNodejs
Studying technologies

Hello! Welcome to my nodejs crud example!

- This is an example of a crud made during my study of two technologies: nodejs and mongodb.

To perform this example you must install:
1 - Nodejs >> I recommend installing the latest stable version available at: https://nodejs.org/en/, there you can download the package or choose to follow the installation via terminal using the repositories of your linux distribution itself.

2 - MongoDB >> If you already have mogodb installed on your machine, I don't need to reinstall, if you don't already have it, I recommend using docker, as it becomes more practical to upload a container with the image of mongo and it will not affect your physical machine.

To install the docker follow the step-by-step described here: https://docs.docker.com/install/linux/docker-ce/debian/

With the docker installed, run:
(docker pull mongo) to download mongo's iamge container

then:

(docker run --name (name for your container) -p 27017: 27017 mongo) to raise the container with the successful access set ports of the image name you want to run.

If you want to test the container run:

(sudo docker ps) to see if the container is being used.

That done, the environment is set for development.
For database data visualization, among the various visualization forms, I recommend using robo3t.

If you have any questions, you can contact: hallef.vieira@hotmail.com
