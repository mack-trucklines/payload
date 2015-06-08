(defproject payliad "0.10-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.1"]]

  :clean-targets ^{:protect false} [:target-path "out" "resources/public/js"]

  :cljsbuild {
    :builds [{:dev
               {:source-paths ["src"]
                :figwheel { :on-jsload "payload.core/start" }
                :compiler {:main payload.core
                           :asset-path "js/out"
                           :output-to "resources/public/js/main.js"
                           :output-dir "resources/public/js/out"
                           :optimizations :none
                           :source-map true}}}
              {:prod
               {:id "prod"
                :source-paths ["src"]
                :compiler {:main payload.core
                           :output-to "resources/public/js/main.js"
                           :optimizations :advanced
                           :asset-path "js/out"
                           :output-dir "resources/public/js/out"
                           :pretty-print false}}}]})
