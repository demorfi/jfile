TOOLCHAIN := toolchain
BUILDDIR := builds
JRUBYGET := https://s3.amazonaws.com/jruby.org/downloads/1.7.19/jruby-complete-1.7.19.jar
JRUBY := ${TOOLCHAIN}/jruby-complete.jar
VERSION := 1.0

.PHONY: all clean distribute
all: js css build

js: ${BUILDDIR}
	mkdir -p ${BUILDDIR}/javascript
	java -jar ${TOOLCHAIN}/compressor.jar -o javascript/jfile.jquery.min.js javascript/jfile.jquery.js && \
	cp javascript/jfile.jquery.min.js ${BUILDDIR}/javascript/jfile.jquery.min.js

css: ${BUILDDIR}
	mkdir -p ${BUILDDIR}/stylesheets
	java -jar ${JRUBY} -S compass compile --app-dir=. --sass-dir=stylesheets --images-dir=images --fonts-dir=fonts --output-style=compressed && \
	java -jar ${TOOLCHAIN}/compressor.jar -o stylesheets/jfile.min.css stylesheets/jfile.css && \
	cp stylesheets/jfile.min.css ${BUILDDIR}/stylesheets/jfile.min.css && \
	rm stylesheets/jfile.css

$(BUILDDIR): ${TOOLCHAIN}
	mkdir -p ${BUILDDIR}

$(TOOLCHAIN):
	mkdir -p ${TOOLCHAIN}
	wget ${JRUBYGET} && mv jruby-complete-1.7.19.jar ${JRUBY} && \
	java -jar ${JRUBY} -S gem install -i ${TOOLCHAIN}/gems shared sass compass yuicompressor --no-rdoc --no-ri && \
	jar uf ${JRUBY} -C ${TOOLCHAIN}/gems . && \
	cp ${TOOLCHAIN}/gems/gems/*compressor*/lib/*compressor*.jar ${TOOLCHAIN}/compressor.jar

build: ${BUILDDIR}
	cp LICENSE ${BUILDDIR}
	cp README.md ${BUILDDIR}
	cd ${BUILDDIR} && zip -r jfile-${VERSION}.zip ./ && mv jfile-${VERSION}.zip ../

clean:
	rm -rf ${BUILDDIR}
	rm -rf ${TOOLCHAIN}
	rm -f jfile-${VERSION}.zip
	rm -f images/extensions-*.png
