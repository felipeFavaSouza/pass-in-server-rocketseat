import {
  registerForEvent
} from "./chunk-JM7NBGQF.mjs";
import {
  errorHandler
} from "./chunk-EWL22B6F.mjs";
import {
  checkIn
} from "./chunk-4VEAIL4J.mjs";
import {
  createEvent
} from "./chunk-DQM42QLI.mjs";
import "./chunk-QUZDYKPF.mjs";
import {
  getAttendeeBadge
} from "./chunk-RHSDGLSA.mjs";
import {
  getEventAttendees
} from "./chunk-7UFD64M3.mjs";
import {
  getEvent
} from "./chunk-5LVUTGRD.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in construida durante o NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
