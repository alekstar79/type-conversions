pull:
	docker pull alekstar79/type-conversions
run:
	docker run -d -p 80:80 --rm --name type-conversions alekstar79/type-conversions
stop:
	docker stop type-conversions
