(function() {
    (function($) {
        return $.widget('IKS.wagtailReadabilityScore', {
            options: {
                uuid: '',
                editable: null
            },
            populateToolbar: function(toolbar) {
                var button, widget;

                var getEnclosing = function(tag) {
                    var node;

                    node = widget.options.editable.getSelection().commonAncestorContainer;
                    return $(node).parents(tag).get(0);
                };

                widget = this;

                button = $('<span></span>');
                button.hallobutton({
                    uuid: this.options.uuid,
                    editable: this.options.editable,
                    label: 'Readability Score',
                    icon: 'icon icon-view',
                    command: null
                });

                toolbar.append(button);

                button.on('click', function(event) {
                    $('body > .modal').remove();
                    var container = $('<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n    <div class="modal-dialog">\n        <div class="modal-content"\
>\n            <button type="button" class="close icon text-replace icon-cross" data-dismiss="modal" aria-hidden="true">&times;</button>\n            <div class="modal-body"><hea\
der class="nice-padding   hasform"><div class="row"><div class="left"><div class="col"><h1><i class="icon icon-view"></i>View Readability Score</h1></div></header><div class="modal-bo\
dy-body"></div></div>\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div>');

                    // add container to body and hide it, so content can be added to it before display
                    $('body').append(container);
                    container.modal('hide');
                    var modalBody = container.find('.modal-body-body');
                    modalBody.html('<div class="nice-padding"><h1> Test </h1></div>');
                    $("#wagtail-readability-score").on("click", function() {
                        widget.options.editable.setContents($("#wagtail-readability-score").val());
                        widget.options.editable.setModified();
                        container.modal('hide');
                    });
                    container.modal('show');
                });
            }
        });
    })(jQuery);
}).call(this);
