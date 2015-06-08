(ns figwheel.connect (:require [payload.core] [figwheel.client]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload payload.core/start, :build-id "dev"})

